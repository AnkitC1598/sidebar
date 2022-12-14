import create from "zustand";
import { devtools } from "zustand/middleware";
import { sidebarReducer, socketReducer } from "./reducer";

export const useSidebarStore = create(
	devtools(
		(set) => ({
			loaded: false,
			user: null,
			version: "0.0.0",
			agendas: [],
			inboxChats: [],
			discussionChats: [],
			liveChats: [],
			chatPage: 0,
			participants: [],
			resources: [],
			resourcePage: 0,
			doubts: [],
			doubtPage: 0,
			sideBarOpen: false,
			sideBarSection: "",
			sideBarNestedSection: "",
			overlapSection: {
				visible: false,
				Component: null,
				props: {},
				name: "",
				title: "",
				subtitle: "",
				image: "",
			},
			lastOverlapSection: [],
			unRead: {
				chat: 0,
				resource: 0,
				doubt: 0,
			},
			dispatchToSidebar: (action) =>
				set((state) => sidebarReducer(state, action)),
		}),
		{ name: "useSidebarStore" }
	)
);

export const useSocketStore = create(
	devtools(
		(set) => ({
			meetingSocket: { socket: null, connected: false, error: false },
			chatSocket: { socket: null, connected: false, error: false },
			boringMeterSocket: { socket: null, connected: false, error: false },
			pasteBinSocket: { socket: null, connected: false, error: false },
			sessionSocket: { socket: null, connected: false, error: false },
			dispatchToSocket: (action) =>
				set((state) => socketReducer(state, action)),
		}),
		{ name: "useSocketStore" }
	)
);
