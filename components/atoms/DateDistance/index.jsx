import { formatDistanceToNow } from "date-fns";
import React from "react";

const DateDistance = ({ date, addSuffix, includeSeconds }) => {
	return (
		<>
			{formatDistanceToNow(new Date(date), {
				addSuffix,
				includeSeconds,
			})}
		</>
	);
};

DateDistance.defaultProps = {
	date: new Date(),
	addSuffix: true,
	includeSeconds: true,
};

export default DateDistance;
