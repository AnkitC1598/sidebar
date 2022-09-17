import React from "react";
import { ChatBubble } from "..";
import { classNames } from "../../../submodules/shared/utils";

const LRChat = ({ msgGroup, isSent }) => {
	console.log(
		// msgGroup.messages.map(({ _id, message }) => ({ _id, message }))
	);
	return (
		<>
			<div className="flex flex-col space-y-1 w-full">
				<div className="flex justify-between">
					<span
						className={classNames(
							"flex items-center",
							isSent ? "flex-row-reverse" : ""
						)}
					>
						{/* {isSent ? null : (
							<Avatar
								imgUrl={
									msgGroup.user.profileImage
										? msgGroup.user.profileImage
										: `https://avatars.dicebear.com/api/initials/${msgGroup.user?.name}.svg`
								}
								alt={msgGroup.user?.name}
								size="h-5 w-5"
							/>
						)} */}
						<span className="text-sm font-semibold text-slate-900 dark:text-slate-200">
							{msgGroup.user.name}
						</span>
						{/* <Role role={msgGroup.user.role} /> */}
					</span>
					{/* <span className="hidden break-normal text-xs text-slate-300 group-hover:block">
						<DateDistance date={msgGroup.createdAt} />
					</span> */}
				</div>
				<div className="flex w-full flex-col items-start space-y-1">
					<div className="group-scoped relative flex items-center space-x-1">
						<div className="flex flex-col w-full">
							{msgGroup?.messages.map(
								({ _id, createdAt, message }) => (
									<ChatBubble
										key={_id}
										time={createdAt}
										msg={message}
									/>
								)
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LRChat;
