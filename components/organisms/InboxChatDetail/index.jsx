import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
	ArrowRightOnRectangleIcon,
	CameraIcon,
	PlusIcon,
	UsersIcon,
} from "@heroicons/react/24/solid";
import { useMutation } from "@tanstack/react-query";
import produce from "immer";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import useGetChatDetails from "../../../hooks/query/chat/useGetChatDetails";
import ChatQueries from "../../../queries/chat";
import ChatSchema from "../../../schema/chat";
import { useSidebarStore } from "../../../store/store";
import {
	Button,
	Input,
	Loader,
	UserSearch,
} from "../../../submodules/shared/components/atoms";
import { Modal } from "../../../submodules/shared/components/organisms";
import queryClient from "../../../submodules/shared/services/queryClient";
import { Participant } from "../../molecules";

const InboxChatDetail = ({ chatId }) => {
	const user = useSidebarStore((store) => store.user);
	const [edit, setEdit] = useState(false);
	const [newTitle, setNewTitle] = useState(null);
	const [isAddOpen, setIsAddOpen] = useState(false);
	const [isDeleteOpen, setIsDeleteOpen] = useState(false);
	const [searchedUsers, setSearchedUsers] = useState([]);

	const loadingToastRef = useRef();

	const memberOption = [
		{
			label: "Leave",
			action: () => console.debug("Leave group"),
		},
	];
	const adminOption = [
		{
			label: "Make group admin",
			action: () => console.debug("elevateAccess"),
		},
		{
			label: "Remove",
			action: () => console.debug("remove"),
		},
	];

	const { isLoading: fetchingChatDetail, data } = useGetChatDetails({
		chatId,
	});

	const openAdd = () => setIsAddOpen(true);
	const closeAdd = () => {
		setSearchedUsers([]);
		setIsAddOpen(false);
	};

	const openDelete = () => setIsDeleteOpen(true);
	const closeDelete = () => setIsDeleteOpen(false);

	const submitNewTitle = () => {
		console.log(newTitle);
		setEdit(false);
	};

	const addSelectedUser = (val) =>
		setSearchedUsers((prev) =>
			produce(prev, (draft) => {
				draft[0] = val;
			})
		);

	const removeSelectedUser = (idx) => {
		setSearchedUsers((prev) =>
			produce(prev, (draft) => {
				draft.splice(idx, 1);
			})
		);
	};

	const { mutate, isLoading } = useMutation(ChatQueries.addToChat, {
		onSuccess: (data) => {
			queryClient.invalidateQueries([`chatDetail-${chatId}`]);
			toast.update(loadingToastRef.current, {
				render: data.data.message,
				type: "success",
				isLoading: false,
				closeOnClick: true,
				pauseOnFocusLoss: false,
				pauseOnHover: false,
				autoClose: 5000,
			});
		},
		onError: (error) => {
			const resp = error.response.data.results.data;
			toast.update(loadingToastRef.current, {
				render: resp,
				type: "error",
				isLoading: false,
				closeOnClick: true,
				pauseOnFocusLoss: false,
				pauseOnHover: false,
				autoClose: 5000,
			});
		},
	});

	const addUsers = () => {
		const addUserData = { chatId, uid: searchedUsers[0].uid };
		const isDataValid = ChatSchema.addToChat.safeParse(addUserData);
		if (isDataValid.success) {
			mutate(addUserData);
			loadingToastRef.current = toast.loading("Please wait...");
		} else {
			const { fieldErrors, formErrors } = isDataValid.error.flatten();
			if (formErrors.length) console.error(formErrors);
			if (Object.keys(fieldErrors).length) console.error(fieldErrors);
		}
		closeAdd();
	};

	return fetchingChatDetail ? (
		<div className="h-full w-full flex items-center justify-center">
			<Loader />
		</div>
	) : (
		<>
			<div
				className="flex w-full flex-col items-center space-y-4 bg-neutral-200 dark:bg-neutral-800 p-4 pb-2 relative"
				onClick={(e) =>
					setEdit(() =>
						!e.target.classList.value.split(" ").includes("title")
							? false
							: true
					)
				}
			>
				<span className="relative flex items-center justify-center group">
					<span className="group-hover:opacity-50">
						{data.details.imageUrl === null &&
						data.details.type === "group" ? (
							<UsersIcon className="h-28 p-2 bg-neutral-500 aspect-square rounded-md" />
						) : (
							<img
								src={
									data.details.imageUrl ||
									`https://avatars.dicebear.com/api/initials/${data.details.title}.svg`
								}
								alt={data.details.title}
								className="aspect-square h-28 rounded-md"
							/>
						)}
					</span>
					<CameraIcon className="h-5 absolute invisible group-hover:visible" />
				</span>
				<div
					className="group relative flex flex-col items-center space-y-1 title"
					onClick={() => setEdit((prev) => !prev)}
				>
					{edit ? (
						<Input
							className="text-slate-900 dark:text-slate-200 bg-neutral-50 dark:bg-neutral-900 focus:text-slate-900 dark:focus:text-slate-200 focus:bg-neutral-50 dark:focus:bg-neutral-900 title"
							handleSubmit={submitNewTitle}
							defaultValue={data.details.title}
							placeholder={data.details.title}
							setValue={setNewTitle}
						/>
					) : (
						<span className="text-xl font-medium text-slate-900 dark:text-slate-200 px-2 dark:hover:bg-neutral-700 rounded-md title">
							{data.details.title}
						</span>
					)}
					<span className="text-xs text-slate-400 dark:text-slate-200">
						Created By @{data.details.createdBy.username}
					</span>
				</div>
			</div>
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
							key={member.uid + idx + 1}
							className="bg-neutral-50 text-slate-900 dark:bg-neutral-900 dark:text-slate-200"
						>
							<Participant
								participant={member}
								showPosition={false}
								showOnline={false}
								options={
									user.uid === member.uid
										? memberOption
										: adminOption
								}
							/>
						</li>
					))}
				</ul>
				<div className="flex p-2 space-x-2">
					<Button
						label="Add"
						action={openAdd}
						className="w-1/3"
						icon={<PlusIcon className="h-5" />}
					/>
					<Button
						label="Exit & Delete Group"
						action={openDelete}
						className="w-2/3"
						icon={<ArrowRightOnRectangleIcon className="h-5" />}
					/>
				</div>
			</div>
			<Modal
				className="p-6"
				customHandler={{
					isOpen: isAddOpen,
					close: closeAdd,
				}}
			>
				<UserSearch
					placeholder="Search for student"
					selected={searchedUsers}
					add={addSelectedUser}
					remove={removeSelectedUser}
					maxListHeight="h-20"
				/>
				<div className="mt-4 flex justify-center">
					<Button
						label="Add"
						disabled={isLoading}
						className="w-full"
						action={addUsers}
						icon={<PlusIcon className="h-5" />}
					/>
				</div>
			</Modal>
			<Modal
				className="p-6"
				customHandler={{
					isOpen: isDeleteOpen,
					close: closeDelete,
				}}
			>
				<div className="mt-2 text-slate-900 dark:text-slate-200">
					<p>Exit & Delete "{data.details.title}". Are you sure? </p>
				</div>
				<div className="mt-4 flex justify-between">
					<button
						type="submit"
						className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-0"
						onClick={closeDelete}
					>
						Cancel
					</button>
					<button
						type="submit"
						className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-0 space-x-1"
						onClick={closeDelete}
					>
						<span>Confirm</span>
					</button>
				</div>
			</Modal>
		</>
	);
};

export default InboxChatDetail;
