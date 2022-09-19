import React from "react";
import { Avatar, Role } from "../../../submodules/shared/components/atoms";
import { DateDistance, ReadMore } from "../../atoms";

const LinearChat = ({ msgGroup }) => {
	if (Object.prototype.toString.call(msgGroup) !== "[object Object]")
		return null;

	return (
		<>
			<div className="flex w-full flex-col space-y-1">
				<div className="flex justify-between">
					<span className="flex items-center space-x-2">
						<Avatar
							imgUrl={
								msgGroup.user.profileImage
									? msgGroup.user.profileImage
									: `https://avatars.dicebear.com/api/initials/${msgGroup.user?.name}.svg`
							}
							alt={msgGroup.user?.name}
							size="h-5 w-5"
						/>
						<span className="text-sm font-semibold text-slate-900 dark:text-slate-200">
							{msgGroup.user.name}
						</span>
						<Role role={msgGroup.user.role} />
					</span>
					<span className="hidden break-normal text-xs text-slate-300 group-hover:block">
						<DateDistance date={msgGroup.createdAt} />
					</span>
				</div>
				<div className="flex w-full flex-col items-start space-y-1">
					<div className="group-scoped message relative flex w-full items-center space-x-1 pl-7">
						<div className="flex flex-col">
							{msgGroup.messages.map(({ _id, message }) => (
								<ReadMore key={_id} msg={message} />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

LinearChat.defaultProps = {
	msgGroup: null,
};

export default LinearChat;
