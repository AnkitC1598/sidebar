import { UsersIcon } from "@heroicons/react/24/solid";
import React from "react";
import { formatDate } from "../../../submodules/shared/utils";

const InboxChatPreview = ({ chat }) => {
	return (
		<>
			<div className="group flex w-full flex-1 items-center space-x-2">
				<div className="relative flex-shrink-0">
					{chat.imageUrl === null && chat.type === "group" ? (
						<UsersIcon className="h-10 p-2 bg-neutral-500 aspect-square rounded-md" />
					) : (
						<img
							src={
								chat.imageUrl ||
								`https://avatars.dicebear.com/api/initials/${chat.title}.svg`
							}
							alt={chat.title}
							className="aspect-square h-10 rounded-md"
						/>
					)}
				</div>
				<div className="min-w-0 flex-1 px-2 md:grid md:gap-1">
					<div className="w-[80%] truncate">
						<div className="group relative flex space-x-1">
							<span className="truncate text-sm font-medium text-slate-900 dark:text-slate-200">
								{chat.title}
							</span>
						</div>
						<span className="flex items-center text-xs text-slate-400 dark:text-slate-500">
							<span className="truncate">{chat.lastMessage}</span>
						</span>
					</div>
				</div>
				<div className="flex flex-col">
					<div className="text-xs text-slate-900 dark:text-slate-200">
						{formatDate(chat.lastMessageAt).chat}
					</div>
				</div>
			</div>
		</>
	);
};

export default InboxChatPreview;
