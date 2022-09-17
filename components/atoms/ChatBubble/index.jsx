import React, { useState } from "react";
import { classNames, formatDate, urlify } from "../../../submodules/shared/utils";

const ChatBubble = ({ msg, time }) => {
	if (Object.prototype.toString.call(msg) !== "[object String]")
		throw new Error("msg must be a string");

	const [isReadMore, setIsReadMore] = useState(msg.length > 150);
	return (
		<>
			<span className="relative bg-neutral-800 p-2 rounded-lg min-w-24 w-fit mb-0.5">
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
						onClick={() => setIsReadMore(!isReadMore)}
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
