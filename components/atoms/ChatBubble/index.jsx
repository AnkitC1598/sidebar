import React, { useCallback, useMemo, useState } from "react";
import { useSidebarStore } from "../../../store/store";
import { LeftTail, RightTail } from "../../../submodules/shared/svgs";
import {
	classNames,
	formatDate,
	getHex,
	urlify,
} from "../../../submodules/shared/utils";

const ChatBubble = ({ msg, time, user, isSent }) => {
	if (Object.prototype.toString.call(msg) !== "[object String]")
		throw new Error("ChatBubble: msg must be a string");

	const [isReadMore, setIsReadMore] = useState(msg.length > 150);
	const dispatchToSidebar = useSidebarStore(
		(store) => store.dispatchToSidebar
	);

	const openProfile = () =>
		dispatchToSidebar({
			type: "SET_OVERLAP_SECTION",
			payload: {
				component: "profile",
				title: user.name,
				subtitle: `@${user.username}`,
				props: {
					username: user.username,
				},
			},
		});

	const toggleReadMore = () => setIsReadMore((prev) => !prev);

	return (
		<>
			<span
				className={classNames(
					"relative p-2 rounded-lg min-w-24 w-fit shadow",
					user
						? isSent
							? "rounded-tr-none"
							: "rounded-tl-none"
						: "",
					isSent
						? "bg-amber-100/70 dark:bg-amber-900"
						: "bg-neutral-50 dark:bg-neutral-800"
				)}
			>
				{user ? (
					<span
						className={classNames(
							"absolute top-0 z-10 w-2 h-3 dark:text-neutral-800 text-neutral-200",
							isSent ? "-right-2" : "-left-2"
						)}
					>
						{isSent ? (
							<RightTail className="text-amber-100/70 dark:text-amber-900" />
						) : (
							<LeftTail className="text-neutral-50 dark:text-neutral-800" />
						)}
					</span>
				) : null}
				{user && !isSent ? (
					<div className="flex items-center justify-between">
						<span
							className="text-sm font-semibold hover:underline cursor-pointer"
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
				<span className="text-xxs text-slate-500 float-right -mb-1">
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
