import { Tab } from "@headlessui/react";
import {
	InboxIcon,
	SignalIcon,
	UserGroupIcon
} from "@heroicons/react/24/solid";
import { Input } from "../../../submodules/shared/components/atoms";
import { classNames } from "../../../submodules/shared/utils";
import { Chat } from "../../molecules";

const tabs = [
	{ label: "Live", icon: <SignalIcon className="h-5 rounded-md" /> },
	{ label: "Discussion", icon: <UserGroupIcon className="h-5 rounded-md" /> },
	{ label: "Inbox", icon: <InboxIcon className="h-5 rounded-md" /> },
];

const Chats = ({ messages }) => {
	return (
		<>
			<div className="flex w-full flex-col bg-white text-slate-900 h-screen-ios dark:bg-neutral-900 dark:text-slate-200 h-navScreen">
				<span className="px-4 my-4">
					<Tab.Group>
						<Tab.List className="flex space-x-1 rounded-md bg-white dark:bg-neutral-700 p-1">
							{tabs.map((tab) => (
								<Tab
									key={tab.label}
									className={({ selected }) =>
										classNames(
											"w-full rounded-md py-2.5 text-sm font-medium leading-5 focus:outline-none transition-all duration-200 focus:ring-0 flex justify-center items-center space-x-1",
											selected
												? "bg-neutral-900 text-slate-200 dark:bg-neutral-900 dark:text-slate-200"
												: "bg-neutral-200 text-slate-900 dark:bg-neutral-700 dark:text-slate-200"
										)
									}
								>
									{tab.icon}
									<span class="sr-only">{tab.label}</span>
								</Tab>
							))}
						</Tab.List>
					</Tab.Group>
				</span>
				{Object.prototype.toString.call(messages) ===
					"[object Array]" && messages.length ? (
					<>
						<ul className="flex h-full w-full flex-col divide-y divide-neutral-200 overflow-hidden overflow-y-scroll rounded-md pt-0.5 scrollbar-hide dark:divide-neutral-800 md:!h-full">
							{messages.map((msgGroup, idx) => (
								<Chat
									key={
										msgGroup?.user?.uid +
										msgGroup.type +
										idx
									}
									msgGroup={msgGroup}
								/>
							))}
						</ul>
						<div className="border-t border-neutral-200 px-3 py-3 dark:border-neutral-800">
							<Input placeholder="Send Message" />
						</div>
					</>
				) : (
					<>
						<div className="flex h-full select-none flex-col items-center justify-center space-x-1 space-y-8 text-black">
							<img
								src="/assets/img/noMessage.png"
								alt="No Agenda's Listed"
								className="w-[25%] md:w-[60%]"
							/>
							<div className="text-slate-500">
								No Resource's Listed
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};

Chats.defaultProps = {
	messages: [],
};

export default Chats;
