import React from "react";
import { Role } from "../../../submodules/shared/components/atoms";

const Profile = ({ user }) => {
	return (
		<>
			<div className="flex w-full flex-col items-center space-y-4 bg-neutral-200 dark:bg-neutral-800 p-4">
				<img
					className="aspect-square h-28 w-28 rounded-md"
					src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
				/>
				<div className="group relative flex flex-col items-center space-y-2">
					<span className="text-xl font-medium text-slate-900 dark:text-slate-200">
						{user.name}
					</span>
					<a
						href={`https://letsupgrade.in/user/${user.username}`}
						target="_blank"
						className="!mt-0 font-medium text-slate-900 hover:italic hover:text-lu-900 dark:text-slate-200 hover:dark:text-lu-200"
					>
						@{user.username}
					</a>
					<Role role={user.role} />
				</div>
			</div>
		</>
	);
};

Profile.defaultProps = {
	user: {},
};

export default Profile;
