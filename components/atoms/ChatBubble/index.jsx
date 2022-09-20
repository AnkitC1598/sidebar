import React, { useCallback, useMemo, useState } from "react";
import { useSidebarStore } from "../../../store/store";
import { LeftTail, RightTail } from "../../../submodules/shared/svgs";
import {
	classNames,
	formatDate,
	getHex,
	urlify
} from "../../../submodules/shared/utils";

const ChatBubble = ({ msg, time, user }) => {
	if (Object.prototype.toString.call(msg) !== "[object String]")
		throw new Error("ChatBubble: msg must be a string");

	const [isReadMore, setIsReadMore] = useState(msg.length > 150);
	const { userId, dispatchToSidebar } = useSidebarStore((store) => ({
		userId: store.user.uid,
		dispatchToSidebar: store.dispatchToSidebar,
	}));
	const isSent = useMemo(() => user?.uid === userId, [user?.uid, userId]);

	const openProfile = () =>
		dispatchToSidebar({
			type: "SET_OVERLAP_SECTION",
			payload: {
				component: "profile",
				title: `@${user.username}`,
				props: {
					user: user,
				},
			},
		});

	const toggleReadMore = () => setIsReadMore((prev) => !prev);

	return (
		<>
			<span
				className={classNames(
					"relative bg-neutral-200 dark:bg-neutral-800 p-2 rounded-lg min-w-24 w-fit mb-0.5",
					user ? (isSent ? "rounded-tr-none" : "rounded-tl-none") : ""
				)}
			>
				{user ? (
					<span
						className={classNames(
							"absolute top-0 z-10 w-2 h-3 dark:text-neutral-800 text-neutral-200",
							isSent ? "-right-2" : "-left-2"
						)}
					>
						{isSent ? <RightTail /> : <LeftTail />}
					</span>
				) : null}
				{user && !isSent ? (
					<div className="flex items-center justify-between">
						<span
							className="text-sm font-semibold hover:underline cursor-pointer" // text-slate-900 dark:text-slate-200"
							style={{
								color: getHex(user.uid),
							}}
							onClick={openProfile}
						>
							{user.name}
						</span>
					</div>
				) : null}
				<div
					className={classNames(
						"text-sm",
						urlify(msg).urls.length && "mt-2"
					)}
					dangerouslySetInnerHTML={{
						__html: isReadMore
							? msg.length > 150
								? `${urlify(msg.slice(0, 150)).text}...`
								: urlify(msg).text
							: urlify(msg).text,
					}}
				/>
				{msg.length > 150 && (
					<div
						className="cursor-pointer text-center text-xs text-lu-500"
						onClick={toggleReadMore}
					>
						{isReadMore ? "Show More" : "Show Less"}
					</div>
				)}
				<span className="text-xxs text-slate-500 float-right -mb-2 -mt-1">
					{formatDate(time).chat}
				</span>
			</span>
		</>
	);
};

ChatBubble.defaultProps = {
	msg: null,
};

export default ChatBubble;
