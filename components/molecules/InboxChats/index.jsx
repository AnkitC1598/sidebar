import React from "react";
import { useSidebarStore } from "../../../store/store";
import { InboxChatPreview } from "../../atoms";

const InboxChats = ({ chats }) => {
	const dispatchToSidebar = useSidebarStore(
		(store) => store.dispatchToSidebar
	);

	return (
		<>
			{Object.prototype.toString.call(chats) === "[object Array]" &&
			chats.length ? (
				<>
					<ul className="flex h-full w-full flex-col divide-y divide-neutral-200 overflow-hidden overflow-y-scroll rounded-md pt-0.5 scrollbar-hide dark:divide-neutral-800">
						{chats.map((chat, idx) => (
							<li
								key={chat?.chatName + idx}
								className="group flex space-x-2 break-all p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800"
								onClick={() =>
									dispatchToSidebar({
										type: "SET_OVERLAP_SECTION",
										payload: {
											component: "inboxChat",
											props: {
												chatId: chat.chatId,
											},
										},
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
						<img
							src="/assets/img/noMessage.png"
							alt="No Agenda's Listed"
							className="w-[25%] md:w-[60%]"
						/>
						<div className="text-slate-500">
							No Resource's Listed
						</div>
					</div>
				</>
			)}
		</>
	);
};

InboxChats.defaultProps = {
	chats: [
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
	],
};

export default InboxChats;