import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import useGetChatDetails from "../../../hooks/query/chat/useGetChatDetails";
import { Button } from "../../../submodules/shared/components/atoms";
import { Participant } from "../../molecules";

const chat = {
	chatId: 1,
	chatIcon: "https://via.placeholder.com/150",
	chatName: "LisA Chat Test",
	members: [
		{
			uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t21",
			profileImage:
				"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
			name: "Ashley Porter 1",
			username: "ashleyporter",
			role: "student",
			title: "Code Storming 💻",
		},
		{
			uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t22",
			profileImage:
				"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
			name: "Ashley Porter 2",
			username: "ashleyporter",
			role: "student",
			title: "Code Storming 💻",
		},
		{
			uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t23",
			profileImage:
				"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
			name: "Ashley Porter 3",
			username: "ashleyporter",
			role: "student",
			title: "Code Storming 💻",
		},
		{
			uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t24",
			profileImage:
				"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
			name: "Ashley Porter 4",
			username: "ashleyporter",
			role: "student",
			title: "Code Storming 💻",
		},
		{
			uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t25",
			profileImage:
				"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
			name: "Ashley Porter 5",
			username: "ashleyporter",
			role: "student",
			title: "Code Storming 💻",
		},
		{
			uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t26",
			profileImage:
				"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
			name: "Ashley Porter 6",
			username: "ashleyporter",
			role: "student",
			title: "Code Storming 💻",
		},
		{
			uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t27",
			profileImage:
				"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
			name: "Ashley Porter 7",
			username: "ashleyporter",
			role: "student",
			title: "Code Storming 💻",
		},
		{
			uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t28",
			profileImage:
				"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
			name: "Ashley Porter 8",
			username: "ashleyporter",
			role: "student",
			title: "Code Storming 💻",
		},
		{
			uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t29",
			profileImage:
				"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
			name: "Ashley Porter 9",
			username: "ashleyporter",
			role: "student",
			title: "Code Storming 💻",
		},
		{
			uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t210",
			profileImage:
				"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
			name: "Ashley Porter 10",
			username: "ashleyporter",
			role: "student",
			title: "Code Storming 💻",
		},
		{
			uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t211",
			profileImage:
				"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
			name: "Ashley Porter 11",
			username: "ashleyporter",
			role: "student",
			title: "Code Storming 💻",
		},
	],
};

const CREATOR = "User X";

const InboxChatDetail = ({ chatId }) => {
	const [edit, setEdit] = useState(false);

	const { isLoading, isError, data, error } = useGetChatDetails({ chatId });
	console.log({ isLoading, isError, data, error });
	return isLoading ? null : (
		<>
			{edit ? (
				<div className="flex w-full flex-col items-center space-y-4 bg-neutral-200 dark:bg-neutral-800 p-4 pb-2">
					<img
						className="aspect-square h-28 w-28 rounded-md"
						src="https://via.placeholder.com/150"
					/>
					<div className="group relative flex flex-col items-center space-y-1">
						<span className="w-full">
							<Input />
						</span>
						<Button
							label="Save"
							action={() => console.log("update group details")}
							className="w-full"
						/>
					</div>
				</div>
			) : (
				<div className="flex w-full flex-col items-center space-y-4 bg-neutral-200 dark:bg-neutral-800 p-4 pb-2">
					{chat.imageUrl === null && chat.type === "group" ? (
						<UsersIcon className="h-28 p-2 bg-neutral-500 aspect-square rounded-md" />
					) : (
						<img
							src={
								chat.imageUrl ||
								`https://avatars.dicebear.com/api/initials/${chat.title}.svg`
							}
							alt={chat.title}
							className="aspect-square h-28 rounded-md"
						/>
					)}
					<div className="group relative flex flex-col items-center space-y-1">
						<span className="text-xl font-medium text-slate-900 dark:text-slate-200">
							{data.details.title}
						</span>
						<span className="text-xs text-slate-400 dark:text-slate-200">
							Created By @{data.details.createdBy[0].username}
						</span>
					</div>
				</div>
			)}
			<div className="flex w-full flex-col h-full overflow-y-hidden">
				<div className="flex justify-between text-slate-500 p-2">
					<span className="text-sm">
						{data.members.length} members
					</span>
					<MagnifyingGlassIcon className="h-4 w-4" />
				</div>
				<ul className="h-full divide-y divide-neutral-200 overflow-y-scroll bg-neutral-50 text-slate-900 shadow scrollbar-hide dark:divide-neutral-800 dark:bg-neutral-900 dark:text-slate-200 border-t border-neutral-200 dark:border-neutral-800">
					{data.members.map((member, idx) => (
						<li
							key={member.user[0].uid + idx + 1}
							className="bg-neutral-50 text-slate-900 dark:bg-neutral-900 dark:text-slate-200"
						>
							<Participant
								participant={member.user[0]}
								showPosition={false}
								options={[
									{
										label: "Make group admin",
										action: () =>
											console.debug("elevateAccess"),
									},
									{
										label: "Remove",
										action: () => console.debug("remove"),
									},
								]}
							/>
						</li>
					))}
				</ul>
				<div className="flex p-2 space-x-2">
					<Button
						label="Add"
						action={() => console.log("add member")}
						className="w-1/3"
					/>
					<Button
						label="Delete Group"
						action={() => console.log("delete group")}
						className="w-2/3"
					/>
				</div>
			</div>
		</>
	);
};

export default InboxChatDetail;
