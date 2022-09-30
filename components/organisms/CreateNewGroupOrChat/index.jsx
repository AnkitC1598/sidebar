import { UserGroupIcon } from "@heroicons/react/24/solid";
import { useMutation } from "@tanstack/react-query";
import produce from "immer";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import ChatQueries from "../../../queries/chat";
import ChatSchema from "../../../schema/chat";
import { useSidebarStore } from "../../../store/store";
import {
	Button,
	Input,
	UserSearch
} from "../../../submodules/shared/components/atoms";
import { loadingToastConfig } from "../../../submodules/shared/config";
import queryClient from "../../../submodules/shared/services/queryClient";

const CreateNewGroupOrChat = ({ intent }) => {
	if (Object.prototype.toString.call(intent) !== "[object String]")
		throw new Error(
			"CreateNewGroupOrChat: Cannot Open Creator without Intent"
		);

	const loadingToastRef = useRef();
	const [title, setTitle] = useState(null);
	const [searchedUsers, setSearchedUsers] = useState([]);
	const { user, dispatchToSidebar } = useSidebarStore((store) => ({
		user: store.user,
		dispatchToSidebar: store.dispatchToSidebar,
	}));


	const groupProps = ({ chatId, chatTitle, chatImage }) => [
		{
			label: "Details",
			action: () =>
				dispatchToSidebar({
					type: "SET_OVERLAP_SECTION",
					payload: {
						component: "inboxChatDetail",
						title: chatTitle,
						image: chatImage,
						options: [
							{
								label: "Leave",
								action: () => console.log("Leave"),
							},
						],
						props: {
							chatId: chatId,
						},
					},
				}),
		},
	];

	const singleChatProps = ({ chatTitle, chatSubtitle, chatImage }) => [
		{
			label: "Details",
			action: () =>
				dispatchToSidebar({
					type: "SET_OVERLAP_SECTION",
					payload: {
						component: "profile",
						title: chatTitle,
						subtitle: chatSubtitle,
						image: chatImage,
						props: {
							username: chatSubtitle.replace("@", ""),
						},
					},
				}),
		},
	];

	const addSelectedUser = (val) =>
		setSearchedUsers((prev) =>
			produce(prev, (draft) => {
				if (intent === "group") draft.push(val);
				else draft[0] = val;
			})
		);

	const removeSelectedUser = (idx) => {
		setSearchedUsers((prev) =>
			produce(prev, (draft) => {
				draft.splice(idx, 1);
			})
		);
	};

	const openChat = ({ chatId, title, subtitle, chatImage }) => {
		dispatchToSidebar({
			type: "SET_OVERLAP_SECTION",
			payload: {
				component: "inboxChat",
				title,
				subtitle,
				image: chatImage,
				options:
					intent === "group"
						? groupProps({ chatId, chatTitle: title, chatImage })
						: singleChatProps({
								chatTitle: title,
								chatSubtitle: subtitle,
								chatImage,
						  }),
			},
		});
	};

	const getImage = (arr, title) => {
		return arr?.imageUrl === null && arr?.type === "group" ? (
			<UserGroupIcon className="h-10 p-2 text-neutral-500 dark:text-neutral-300 bg-neutral-200 dark:bg-neutral-700 aspect-square rounded-md" />
		) : (
			<img
				src={
					arr?.imageUrl ||
					`https://avatars.dicebear.com/api/initials/${title}.svg`
				}
				alt={title}
				className="aspect-square h-10 rounded-md"
			/>
		);
	};

	const { mutate, isLoading } = useMutation(
		ChatQueries[intent === "group" ? "initGroup" : "initChat"],
		{
			onSuccess: (data) => {
				queryClient.invalidateQueries(["chats"]);
				toast.update(loadingToastRef.current, {
					render: data.data.message,
					type: "success",
					...loadingToastConfig,
				});
				data = data.data.results.data;
				let title, subtitle;
				if (intent === "group") {
					title = data.title;
				} else {
					const temp = data.members.filter(
						(member) => member.uid !== user.uid
					)[0];
					title = temp.name;
					subtitle = `@${temp.username}`;
				}
				const chatId = data._id;
				const chatImage = getImage(data, title);
				openChat({ chatId, title, subtitle, chatImage });
			},
			onError: (error) => {
				const resp = error.response.data.results.data;
				toast.update(loadingToastRef.current, {
					render: resp.error,
					type: "error",
					...loadingToastConfig,
				});
				let title, subtitle;
				if (intent === "group") {
					title = resp.group.title;
				} else {
					const temp = resp.group.members.filter(
						(member) => member.uid !== user.uid
					)[0];
					title = temp.name;
					subtitle = `@${temp.username}`;
				}
				const chatId = resp.group._id;
				const chatImage = getImage(resp.group, title);
				openChat({ chatId, title, subtitle, chatImage });
			},
		}
	);

	const handleCreate = () => {
		if (intent === "group") {
			const initGrpData = {
				title,
				description: "",
				members: searchedUsers.map((searchedUser) => searchedUser.uid),
			};
			const isDataValid = ChatSchema.initGroup.safeParse(initGrpData);
			if (isDataValid.success) {
				mutate(initGrpData);
				loadingToastRef.current = toast.loading("Please wait...");
			} else {
				const { fieldErrors, formErrors } = isDataValid.error.flatten();
				if (formErrors.length) console.error(formErrors);
				if (Object.keys(fieldErrors).length) console.error(fieldErrors);
			}
		} else {
			const initChatData = {
				user: searchedUsers.map((searchedUser) => searchedUser.uid)[0],
			};
			const isDataValid = ChatSchema.initChat.safeParse(initChatData);
			if (isDataValid.success) {
				mutate(initChatData);
				loadingToastRef.current = toast.loading("Please wait...");
			} else {
				const { fieldErrors, formErrors } = isDataValid.error.flatten();
				if (formErrors.length) console.error(formErrors);
				if (Object.keys(fieldErrors).length) console.error(fieldErrors);
			}
		}
	};

	return (
		<>
			<div className="flex w-full flex-col bg-neutral-50 text-slate-900 h-screen-ios dark:bg-neutral-900 dark:text-slate-200 h-navScreen divide-y divide-neutral-200 dark:divide-neutral-800">
				<div className="h-linearChatContent flex flex-col">
					{intent === "group" ? (
						<div className="flex flex-col p-4 space-y-2 bg-neutral-200 dark:bg-neutral-800">
							<div className="w-full flex space-x-4">
								<img
									src="https://via.placeholder.com/150"
									alt=""
									className="h-10 w-10 rounded-full"
								/>
								<span className="w-full">
									<Input
										placeholder="Title"
										value={title}
										setValue={setTitle}
									/>
								</span>
							</div>
							<span className="text-xs text-slate-500">
								Provide a group subject and optional group icon
							</span>
						</div>
					) : null}
					<span className="px-4">
						<UserSearch
							placeholder="Search for student"
							selected={searchedUsers}
							add={addSelectedUser}
							remove={removeSelectedUser}
						/>
					</span>
				</div>
				<div className="flex flex-col p-4 pb-3 space-y-2">
					<Button
						label="Create"
						disabled={isLoading}
						className="w-full"
						action={handleCreate}
					/>
				</div>
			</div>
		</>
	);
};

CreateNewGroupOrChat.defaultProps = {
	intent: null,
};

export default CreateNewGroupOrChat;
