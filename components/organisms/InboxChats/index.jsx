import React from "react";
import { useSidebarStore } from "../../../store/store";
import { InboxChatPreview } from "../../atoms";

const chats = [
	{
		chatId: 1,
		chatIcon: "https://via.placeholder.com/150",
		chatName: "LisA Chat Test",
		lastMessage: {
			message: "Hello World",
			time: "12:00",
			user: {
				uid: "123",
				name: "LisA",
				avatar: "https://via.placeholder.com/150",
			},
		},
	},
	{
		chatId: 2,
		chatIcon: "https://via.placeholder.com/150",
		chatName: "LisA Chat Test",
		lastMessage: {
			message: "Hello World",
			time: "12:00",
			user: {
				uid: "123",
				name: "LisA",
				avatar: "https://via.placeholder.com/150",
			},
		},
	},
];

const InboxChats = () => {
	const {chats, user, dispatchToSidebar } = useSidebarStore((store) => ({
		chats: store.chats,
		user: store.user,
		dispatchToSidebar: store.dispatchToSidebar,
	}));

	const openInboxChat = ({ chatId, chatName }) =>
		dispatchToSidebar({
			type: "SET_OVERLAP_SECTION",
			payload: {
				component: "inboxChat",
				title: chatName,
				options: [
					{
						label: "Details",
						action: () =>
							dispatchToSidebar({
								type: "SET_OVERLAP_SECTION",
								payload: {
									component: "inboxChatDetail",
									title: chatName,
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
				],
				props: {
					chatId: chatId,
				},
			},
		});

	return (
		<>
			{chats.length ? (
				<>
					<ul className="flex h-full w-full flex-col divide-y divide-neutral-200 overflow-hidden overflow-y-scroll rounded-md scrollbar-hide dark:divide-neutral-800">
						{chats.map((chat, idx) => (
							<li
							key={chat?.title + idx}
							className="group flex space-x-2 break-all p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800"
							onClick={() =>
								openInboxChat({
									chatId: chat?._id,
										chatName: chat?.title,
									})
								}
								>
								<InboxChatPreview chat={chat} />
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
