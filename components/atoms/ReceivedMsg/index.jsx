import React from "react";
import { Avatar, Role } from "../../../submodules/shared/components/atoms";
import DateDistance from "../DateDistance";

const ReceivedMsg = ({msg}) => {
	return (
		<>
			<div className="flex w-full flex-col space-y-1">
				<div className="flex justify-between">
					<span className="flex items-center space-x-2">
						<Avatar
							imgUrl={
								msg.user.profileImage
									? msg.user.profileImage
									: `https://avatars.dicebear.com/api/initials/${msg.user?.name}.svg`
							}
							alt={msg.user?.name}
							size="h-5 w-5"
						/>
						<span className="text-sm font-semibold text-slate-900 dark:text-slate-200">
							{msg.user.name}
						</span>
						<Role role={msg.user.role} />
					</span>
					<span className="hidden break-normal text-xs text-slate-300 group-hover:block">
						<DateDistance date={msg.createdAt} />
					</span>
				</div>
				<div className="flex w-full flex-col items-start space-y-1">
					<div className="group-scoped message relative flex w-full items-center space-x-1 pl-7">
						<div className="flex flex-col">
							{msg.messages.map(({ _id, message }) => (
								<ReadMore key={_id} msg={msg.message} />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ReceivedMsg;
