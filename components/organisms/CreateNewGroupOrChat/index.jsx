import { useMutation } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import queryClient from "../../../queries";
import ChatQueries from "../../../queries/chat";
import ChatSchema from "../../../schema/chat";
import { useSidebarStore } from "../../../store/store";
import { Button, Input } from "../../../submodules/shared/components/atoms";

const CreateNewGroupOrChat = ({ intent }) => {
	if (Object.prototype.toString.call(intent) !== "[object String]")
		throw new Error(
			"CreateNewGroupOrChat: Cannot Open Creator without Intent"
		);

	const loadingToastRef = useRef();
	const [title, setTitle] = useState(null);
	const [description, setDescription] = useState(null);
	const [members, setMembers] = useState([
		"biDKYENbJeYfjQU86Lg3GY08k0L2",
		"QSGUrdFqBmTt1xrLXxU3JIUeCJU2",
	]);
	const { user, dispatchToSidebar } = useSidebarStore((store) => ({
		user: store.user,
		dispatchToSidebar: store.dispatchToSidebar,
	}));

	const openChat = (title) =>
		dispatchToSidebar({
			type: "SET_OVERLAP_SECTION",
			payload: {
				component: "inboxChat",
				title,
			},
		});

	const { mutate, isLoading } = useMutation(
		ChatQueries[intent === "group" ? "initGroup" : "initChat"],
		{
			onSuccess: (data) => {
				queryClient.invalidateQueries(["chats"]);
				toast.update(loadingToastRef.current, {
					render: data.data.message,
					type: "success",
					isLoading: false,
					closeOnClick: true,
					pauseOnFocusLoss: false,
					pauseOnHover: false,
					autoClose: 5000,
				});
				data = data.data.results.data;
				if (intent !== "group") data = data[0];
				let title;
				if (intent === "group") title = data.title;
				else
					title = data.members.filter(
						(member) => member.uid !== user.uid
					)[0].name;
				openChat(title);
			},
			onError: (error) => {
				const resp = error.response.data.results.data;
				toast.update(loadingToastRef.current, {
					render: resp.error,
					type: "error",
					isLoading: false,
					closeOnClick: true,
					pauseOnFocusLoss: false,
					pauseOnHover: false,
					autoClose: 5000,
				});

				let title;
				if (intent === "group") title = resp.group.title;
				else
					title = resp.group.members.filter(
						(member) => member.uid !== user.uid
					)[0].name;
				openChat(title);
			},
		}
	);

	const handleCreate = () => {
		if (intent === "group") {
			const initGrpData = { title, description: "", members };
			const isDataValid = ChatSchema.initGroup.safeParse(initGrpData);
			if (isDataValid.success) {
				mutate(initGrpData);
				loadingToastRef.current = toast.loading("Please wait...");
			} else {
				const { fieldErrors, formErrors } = isDataValid.error.flatten();
				if (formErrors.length) console.error(formErrors);
				if (Object.keys(fieldErrors).length) console.error(fieldErrors);
			}
		} else {
			const initChatData = { user: members[1] };
			const isDataValid = ChatSchema.initChat.safeParse(initChatData);
			if (isDataValid.success) {
				mutate(initChatData);
				loadingToastRef.current = toast.loading("Please wait...");
			} else {
				const { fieldErrors, formErrors } = isDataValid.error.flatten();
				if (formErrors.length) console.error(formErrors);
				if (Object.keys(fieldErrors).length) console.error(fieldErrors);
			}
		}
	};

	return (
		<>
			<div className="flex w-full flex-col bg-neutral-50 text-slate-900 h-screen-ios dark:bg-neutral-900 dark:text-slate-200 h-navScreen">
				<div className="h-full flex flex-col">
					{intent === "group" ? (
						<div className="flex flex-col p-4 space-y-2 bg-neutral-200 dark:bg-neutral-800">
							<div className="w-full flex space-x-4">
								<img
									src="https://via.placeholder.com/150"
									alt=""
									className="h-10 w-10 rounded-full"
								/>
								<span className="w-full">
									<Input
										placeholder="Title"
										value={title}
										setValue={setTitle}
									/>
								</span>
							</div>
							<span className="text-xs text-slate-500">
								Provide a group subject and optional group icon
							</span>
						</div>
					) : null}
					<div className="flex flex-1 flex-col p-4 space-y-2">
						<span className="w-full">
							<Input placeholder="Search for students" />
						</span>
					</div>
				</div>
				<div className="flex flex-col p-4 space-y-2">
					<Button
						label="Create"
						disabled={isLoading}
						className="w-full"
						action={handleCreate}
					/>
				</div>
			</div>
		</>
	);
};

CreateNewGroupOrChat.defaultProps = {
	intent: null,
};

export default CreateNewGroupOrChat;
