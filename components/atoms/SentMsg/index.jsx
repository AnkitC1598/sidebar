import React from "react";
import { Avatar, Role } from "../../../submodules/shared/components/atoms";
import { DateDistance, ReadMore } from "..";

const SentMsg = ({ msg }) => {
	return (
		<>
			<div className="flex flex-col space-y-1">
				<div className="flex justify-between">
					<span className="flex items-center flex-row-reverse space-x-2">
						<span className="text-sm font-semibold text-slate-900 dark:text-slate-200">
							{msg.user.name}
						</span>
						<Role role={msg.user.role} />
					</span>
				</div>
				<div className="flex w-full flex-col items-start space-y-1">
					<div className="group-scoped message relative flex w-full items-center space-x-1 pl-7">
						<div className="flex flex-col">
							<ReadMore msg={msg.message} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SentMsg;
