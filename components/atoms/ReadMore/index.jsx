import React, { useState } from "react";
import { classNames, urlify } from "../../../submodules/shared/utils";

const ReadMore = ({ msg }) => {
	if (Object.prototype.toString.call(msg) !== "[object String]") throw new Error("msg must be a string");

	const [isReadMore, setIsReadMore] = useState(msg.length > 150);
	return (
		<>
			<div
				className={classNames(
					"text-sm font-normal",
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
		</>
	);
};

ReadMore.defaultProps = {
	msg: null,
};

export default ReadMore;
