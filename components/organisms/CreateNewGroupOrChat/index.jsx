import React from "react";
import { useSidebarStore } from "../../../store/store";
import { Button, Input } from "../../../submodules/shared/components/atoms";

const CreateNewGroupOrChat = ({ intent }) => {
	if (Object.prototype.toString.call(intent) !== "[object String]")
		throw new Error(
			"CreateNewGroupOrChat: Cannot Open Creator without Intent"
		);
	const dispatchToSidebar = useSidebarStore(
		(store) => store.dispatchToSidebar
	);
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
									<Input />
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
						action={() =>
							dispatchToSidebar({
								type: "SET_OVERLAP_SECTION",
								payload: {
									component: "inboxChat",
									title: `${intent} Created`,
								},
							})
						}
						className="w-full"
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
