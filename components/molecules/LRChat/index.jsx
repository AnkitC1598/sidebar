import React, { useMemo } from "react";
import { ChatBubble } from "../../atoms";
import { useSidebarStore } from "../../../store/store";
import { classNames } from "../../../submodules/shared/utils";

const LRChat = ({ msgGroup }) => {
	const userId = useSidebarStore((store) => store.user.uid);
	const isSent = useMemo(
		() => msgGroup.user.uid === userId,
		[msgGroup.user.uid, userId]
	);

	return (
		<>
			<div
				className={classNames(
					"flex flex-col space-y-1",
					isSent ? "items-end" : ""
				)}
			>
				<div
					className={classNames(
						"flex items-center group",
						isSent ? "flex-row-reverse" : ""
					)}
				>
					<span
						className={classNames(
							"flex flex-col",
							isSent ? "items-end ml-2" : "items-start mr-2"
						)}
					>
						{msgGroup?.messages.map(
							({ _id, createdAt, message }, msgIdx) => (
								<ChatBubble
									key={_id}
									time={createdAt}
									msg={message}
									user={msgIdx === 0 ? msgGroup.user : null}
									isSent={isSent}
								/>
							)
						)}
					</span>
					{/* <span className="group-hover:visible invisible">asd</span> */}
				</div>
			</div>
		</>
	);
};

export default LRChat;
