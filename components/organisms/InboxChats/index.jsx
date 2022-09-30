import { UserGroupIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useSidebarStore } from "../../../store/store";
import { InboxChatPreview } from "../../atoms";

const InboxChats = () => {
	const { inboxChats, user, dispatchToSidebar } = useSidebarStore((store) => ({
		inboxChats: store.inboxChats,
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

	const openInboxChat = ({
		chatId,
		chatTitle,
		chatSubtitle,
		chatType,
		chatImage,
	}) =>
		dispatchToSidebar({
			type: "SET_OVERLAP_SECTION",
			payload: {
				component: "inboxChat",
				title: chatTitle,
				subtitle: chatSubtitle,
				options:
					chatType === "group"
						? groupProps({ chatId, chatTitle, chatImage })
						: singleChatProps({
								chatTitle,
								chatSubtitle,
								chatImage,
						  }),
				image: chatImage,
				props: {
					chatId: chatId,
				},
			},
		});

	const handleOpenChat = (chat) =>
		openInboxChat({
			chatId: chat?._id,
			chatTitle: chat?.title,
			chatType: chat?.type,
			chatSubtitle:
				chat?.type === "group"
					? null
					: `@${
							chat?.members.filter(
								(member) => member.uid !== user.uid
							)[0].username
					  }`,
			chatImage:
				chat?.imageUrl === null && chat?.type === "group" ? (
					<UserGroupIcon className="h-10 p-2 text-neutral-500 dark:text-neutral-300 bg-neutral-200 dark:bg-neutral-700 aspect-square rounded-md" />
				) : (
					<img
						src={
							chat?.imageUrl ||
							`https://avatars.dicebear.com/api/initials/${chat?.title}.svg`
						}
						alt={chat?.title}
						className="aspect-square h-8 rounded-md"
					/>
				),
		});

	return (
		<>
			{inboxChats.length ? (
				<>
					<ul className="flex h-full w-full flex-col divide-y divide-neutral-200 overflow-hidden overflow-y-scroll rounded-md scrollbar-hide dark:divide-neutral-800">
						{inboxChats.map((chat, idx) => (
							<li
								key={chat?.title + idx}
								className="group flex space-x-2 break-all p-4 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 cursor-pointer"
								onClick={() => handleOpenChat(chat)}
							>
								<InboxChatPreview chat={chat} idx={idx} />
							</li>
						))}
					</ul>
				</>
			) : (
				<>
					<div className="flex h-full select-none flex-col items-center justify-center space-x-1 space-y-8 text-black">
						{/* <img
							src="/assets/img/noMessage.png"
							alt="No Agenda's Listed"
							className="w-[25%] md:w-[60%]"
						/> */}
						<div className="text-slate-500">
							No Resource's Listed
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default InboxChats;
