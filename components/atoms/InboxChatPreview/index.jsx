import React from "react";

const InboxChatPreview = ({ chat }) => {
	return (
		<>
			<div className="group flex w-full flex-1 items-center space-x-2">
				<div className="relative flex-shrink-0">
					<img
						src={chat.chatIcon}
						alt={chat.chatName}
						className="square h-10 rounded-md"
					/>
				</div>
				<div className="min-w-0 flex-1 px-2 md:grid md:gap-1">
					<div className="w-[80%] truncate">
						<div className="group relative flex space-x-1">
							<span className="truncate text-sm font-medium text-slate-900 dark:text-slate-200">
								{chat.chatName}
							</span>
						</div>
						<span className="flex items-center text-xs text-slate-400 dark:text-slate-500">
							<span className="truncate">
								{chat.lastMessage.message}
							</span>
						</span>
					</div>
				</div>
				<div className="flex flex-col">
					<div className="text-xs text-slate-900 dark:text-slate-200">
						{chat.lastMessage.time}
					</div>
				</div>
			</div>
		</>
	);
};

export default InboxChatPreview;
