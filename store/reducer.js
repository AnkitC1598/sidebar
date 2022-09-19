import { produce } from "immer";
import { forwardRef } from "react";
import { InboxChat } from "../components/molecules";
import {
	CreateNewGroupOrChat,
	InboxChatDetail,
	Profile,
} from "../components/organisms";

const getComponentFromName = (name) => {
	switch (name) {
		case "profile":
			return Profile;
		case "inboxChat":
			return InboxChat;
		case "inboxChatDetail":
			return InboxChatDetail;
		case "newChatOrGroup":
			return CreateNewGroupOrChat;
		default:
			return null;
	}
};

const ONE_WAY_OVERLAP_COMPONENTS = ["newChatOrGroup"];

export const socketReducer = (state, { type, payload }) => {
	switch (type) {
		case "SET_SOCKETS":
			return produce(state, (draft) => {
				Object.keys(payload).forEach((key) => {
					draft[key].socket = payload[key];
				});
			});
		case "SOCKET_ERROR":
		case "SOCKET_FAILED":
			return produce(state, (draft) => {
				draft[payload.socketType].error = true;
			});
		case "SOCKET_DISCONNECT":
			return produce(state, (draft) => {
				draft[payload.socketType].connected = false;
			});
		case "SOCKET_JOINED":
			return produce(state, (draft) => {
				draft[payload.socketType].connected = true;
			});
	}
};

export const sidebarReducer = (state, { type, payload }) => {
	switch (type) {
		/* COMMON */
		case "SET_STATE_TYPE":
			return produce(state, (draft) => {
				draft[payload.type] = payload.value;
			});
		case "UNSHIFT_STATE_TYPE":
			return produce(state, (draft) => {
				draft[payload.type].unshift(...payload.value);
			});
		case "APPEND_STATE_TYPE":
			return produce(state, (draft) => {
				draft[payload.type].push(...payload.value);
			});
		case "INC_UNREAD_TYPE":
			return produce(state, (draft) => {
				draft.unRead[payload.unReadType]++;
			});
		case "RESET_UNREAD_TYPE":
			return produce(state, (draft) => {
				draft.unRead[payload.unReadType] = 0;
			});
		case "INC_PAGE_TYPE":
			return produce(state, (draft) => {
				draft[payload.type]++;
			});
		case "TOGGLE_SIDEBAR_STATE":
			return produce(state, (draft) => {
				draft.sideBarOpen = !draft.sideBarOpen;
			});
		case "OPEN_SIDEBAR_STATE":
			return produce(state, (draft) => {
				draft.sideBarOpen = true;
			});
		case "SET_SIDEBAR_SECTION":
			return produce(state, (draft) => {
				draft.sideBarOpen = true;
				draft.sideBarSection = payload;
			});
		case "SET_OVERLAP_SECTION":
			return produce(state, (draft) => {
				if (state.overlapSection.visible)
					draft.lastOverlapSection.push(state.overlapSection);
				const props = payload.props || {};
				const options = payload.options || null;
				const title = payload.title || null;
				const componentName = payload.component;
				const Component = getComponentFromName(componentName);
				draft.overlapSection = {
					visible: true,
					Component: forwardRef((props, ref) => {
						return <Component {...props} />;
					}),
					title: title,
					props: props,
					options: options,
					name: componentName,
				};
			});
		case "GO_BACK_OVERLAP_SECTION":
			return produce(state, (draft) => {
				if (
					state.lastOverlapSection.length &&
					!ONE_WAY_OVERLAP_COMPONENTS.includes(
						state.lastOverlapSection.at(-1).name
					)
				) {
					if (state.lastOverlapSection.length) {
						const last = state.lastOverlapSection.at(-1);
						draft.overlapSection = last;
						draft.lastOverlapSection.pop();
					} else
						draft.overlapSection = {
							visible: false,
							Component: null,
							props: null,
							name: null,
						};
				} else {
					draft.overlapSection = {
						visible: false,
						Component: null,
						props: null,
						name: null,
					};
					draft.lastOverlapSection = [];
				}
			});
		case "RESET_OVERLAP_SECTION":
			return produce(state, (draft) => {
				draft.overlapSection = {
					visible: false,
					Component: null,
					props: null,
					name: null,
				};
				draft.lastOverlapSection = [];
			});
		case "ASSIGN_PARTICIPANT_ID":
			return produce(state, (draft) => {
				const userIndex = draft.participants.findIndex(
					(p) => p.uid === payload.uid
				);
				if (user)
					draft.participants[userIndex].participantId = payload.value;
			});
		case "SET_ACTIVE_SPEAKER":
			return produce(state, (draft) => {
				draft.activeSpeaker = payload.peerId;
			});

		/* MEETING */
		case "SOCKET_DISCONNECT":
			return produce(state, (draft) => {
				const user = draft.participants.find(
					(p) => p.uid === payload.uid
				);
				if (user) {
					draft.chats.push({
						type: "member",
						msg: `${user.name} Left`,
						createdAt: new Date().toISOString(),
					});
					draft.participants.filter((p) => p.uid !== user.uid);
				}
			});
		case "SOCKET_JOINED":
			return produce(state, (draft) => {
				const user = draft.participants.find(
					(p) => p.uid === payload.user.uid
				);
				if (user) draft.participants.filter((p) => p.uid !== user.uid);
				draft.participants.push(payload.user);
			});
		case "SET_AGENDAS":
			return produce(state, (draft) => {
				draft.agendas = payload.agendas;
			});
		case "NEW_MEMBER":
			return produce(state, (draft) => {
				const user = draft.participants.find(
					(p) => p.uid === payload.user.uid
				);
				draft.chats.push({
					type: "member",
					msg: `${payload.user.name} Joined`,
					createdAt: new Date().toISOString(),
				});
				if (user) draft.participants.filter((p) => p.uid !== user.uid);
				draft.participants.push(payload.user);
			});
		case "RAISE_HAND":
			return produce(state, (draft) => {
				const participantIndex = draft.participants.findIndex(
					(p) => p.uid === payload.user.uid
				);
				if (participantIndex !== -1) {
					draft.participants[participantIndex].handRaiseStatus =
						"raised";
					draft.participants[participantIndex].lastDoubtId =
						payload._id;
				}
				draft.doubts.push(payload.question);
			});
		case "ANSWER_DOUBT":
			return produce(state, (draft) => {
				const participantIndex = draft.participants.findIndex(
					(p) => p.uid === payload.uid
				);
				if (participantIndex !== -1) {
					draft.participants[participantIndex].handRaiseStatus = null;
				}
				const doubtIndex = draft.doubts.findIndex(
					(d) => d._id === payload._id
				);
				if (doubtIndex !== -1) {
					draft.doubts[doubtIndex].answer = payload.solution;
				}
			});
		case "HAND_DOWN":
			return produce(state, (draft) => {
				const participantIndex = draft.participants.findIndex(
					(p) => p.uid === payload.uid
				);
				if (participantIndex !== -1) {
					draft.participants[participantIndex].handRaiseStatus = null;
				}
			});
		case "JOINED_MEETING":
			return produce(state, (draft) => {
				const participantIndex = draft.participants.findIndex(
					(p) => p.uid === payload.uid
				);
				if (participantIndex !== -1) {
					draft.participants[participantIndex].handRaiseStatus =
						"accepted";
					draft.participants[participantIndex].participantId =
						payload.participantId;
				}
			});
		case "JOINED_CLASS":
		case "ACCEPTED":
		case "REJECTED":
			return produce(state, (draft) => {
				const participantIndex = draft.participants.findIndex(
					(p) => p.uid === payload.uid
				);
				if (participantIndex !== -1) {
					draft.participants[participantIndex].handRaiseStatus = null;
				}
			});
		case "KICKED":
		case "LEAVE":
			return produce(state, (draft) => {
				const participantIndex = draft.participants.findIndex(
					(p) => p.participantId === payload.participantId
				);
				if (participantIndex !== -1) {
					draft.participants[participantIndex].handRaiseStatus = null;
					draft.participants[participantIndex].participantId = null;
				}
			});
		case "MEMBER_LEFT":
			return produce(state, (draft) => {
				const user = draft.participants.find(
					(p) => p.uid === payload.uid
				);
				if (user) {
					draft.chats.push({
						type: "member",
						msg: `${user.name} Left`,
						createdAt: new Date().toISOString(),
					});
					draft.participants.filter((p) => p.uid !== user.uid);
				}
			});

		/* CHAT */
		case "ADD_MESSAGE":
			return produce(state, (draft) => {
				draft.chats.unshift(payload.message);
			});
		case "ASSIGN_MESSAGE_ID":
			return produce(state, (draft) => {
				const chatIndex = draft.chats.findIndex(
					(c) => c.tempId === payload.tempId
				);
				if (chatIndex !== -1) draft.chats[chatIndex]._id = payload._id;
			});
		case "DELETE_MESSAGE":
			return produce(state, (draft) => {
				const chatIndex = draft.chats.findIndex(
					(c) => c._id === payload._id
				);
				const chatReplyIndex = draft.chats.findIndex(
					(c) => c.replyTo?._id === payload._id
				);
				if (chatIndex !== -1) draft.chats[chatIndex].isDeleted = true;
				if (chatReplyIndex !== -1)
					draft.chats[chatReplyIndex].replyTo.isDeleted = true;
			});

		/* PASTEBIN */
		case "ADD_RESOURCE":
			return produce(state, (draft) => {
				draft.resources.push(payload.resource);
			});
		case "ASSIGN_RESOURCE_ID":
			return produce(state, (draft) => {
				const resourceIndex = draft.resources.findIndex(
					(r) => r.tempId === payload.tempId
				);
				if (resourceIndex !== -1)
					draft.resources[resourceIndex]._id = payload._id;
			});
		case "TOGGLE_RESOURCE_VISIBILITY":
			return produce(state, (draft) => {
				const resourceIndex = draft.resources.findIndex(
					(r) => r._id === payload._id
				);
				if (resourceIndex !== -1)
					draft.resources[resourceIndex].isVisible =
						payload.isVisible;
			});

		/* AGENDA */
		case "ADD_AGENDA":
			return produce(state, (draft) => {
				draft.agendas.push(payload.agenda);
			});
		case "UPDATE_AGENDA":
			return produce(state, (draft) => {
				const agendaIndex = draft.agendas.findIndex(
					(a) => a.id === payload.agenda.id
				);
				if (agendaIndex !== -1)
					draft.agendas[agendaIndex] = payload.agenda;
			});
		case "DELETE_AGENDA":
			return produce(state, (draft) => {
				const agendaIndex = draft.agendas.findIndex(
					(a) => a.id === payload.id
				);
				if (agendaIndex !== -1) draft.agendas.splice(agendaIndex, 1);
			});

		/* BORING METER */
		case "SET_AVG_RATING":
			return produce(state, (draft) => {
				draft.avgRating = payload.avgRating;
			});
	}
};
