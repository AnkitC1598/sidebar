import { Tab, Transition } from "@headlessui/react";
import {
	InboxIcon as InboxIconOutline,
	SignalIcon as SignalIconOutline,
	UserGroupIcon as UserGroupIconOutline
} from "@heroicons/react/24/outline";
import {
	InboxIcon as InboxIconSolid,
	SignalIcon as SignalIconSolid,
	UserGroupIcon as UserGroupIconSolid
} from "@heroicons/react/24/solid";
import { Fragment, useMemo } from "react";
import { classNames } from "../../../submodules/shared/utils";
import { LinearChats } from "../../molecules";

const Chats = ({ messages }) => {
	const tabs = useMemo(
		() => [
			{
				label: "Live",
				solidIcon: <SignalIconSolid className="h-5 w-5 rounded-md" />,
				outlineIcon: (
					<SignalIconOutline className="h-5 w-5 rounded-md" />
				),
				component: <></>,
			},
			{
				label: "Discussion",
				solidIcon: (
					<UserGroupIconSolid className="h-5 w-5 rounded-md" />
				),
				outlineIcon: (
					<UserGroupIconOutline className="h-5 w-5 rounded-md" />
				),
				component: <></>,
			},
			{
				label: "Inbox",
				solidIcon: <InboxIconSolid className="h-5 w-5 rounded-md" />,
				outlineIcon: (
					<InboxIconOutline className="h-5 w-5 rounded-md" />
				),
				component: <></>,
			},
		],
		[]
	);
	return (
		<>
			<div className="flex w-full flex-col bg-neutral-50 text-slate-900 h-screen-ios dark:bg-neutral-900 dark:text-slate-200 h-navScreen divide-y divide-neutral-200 dark:divide-neutral-800">
				<Tab.Group>
					<Tab.List className="flex">
						{tabs.map((tab) => (
							<Tab
								key={tab.label}
								className={classNames(
									"w-full py-2.5 text-sm font-medium leading-5 focus:outline-none transition-all duration-200 focus:ring-0 focus:bg-transparent flex flex-col justify-center items-center space-y-1 relative bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800"
								)}
							>
								{({ selected }) => (
									<>
										{selected
											? tab.solidIcon
											: tab.outlineIcon}
										<span span className="sr-only">
											{tab.label}
										</span>
										<Transition
											as={Fragment}
											show={selected}
											enter="transition ease-in-out duration-500 transform"
											enterFrom="opacity-0"
											enterTo="opacity-100"
											leave="transition ease-in-out duration-500 transform"
											leaveFrom="opacity-100"
											leaveTo="opacity-0"
										>
											<span className="w-2/3 mx-auto absolute -bottom-1 inset-x-0 transition-all duration-200 border-t-4 h-2 rounded-sm border-purple-700 dark:border-purple-300"></span>
										</Transition>
									</>
								)}
							</Tab>
						))}
					</Tab.List>
					<Tab.Panels className="w-full h-full bg-neutral-50 dark:bg-neutral-900">
						{tabs.map((tab) => (
							<Tab.Panel
								key={tab.label}
								className="w-full divide-y divide-neutral-200 bg-neutral-50 outline-none transition-all duration-200 dark:divide-neutral-800 dark:bg-neutral-900 h-chatTab"
							>
								<LinearChats messages={messages} />
							</Tab.Panel>
						))}
					</Tab.Panels>
				</Tab.Group>
			</div>
		</>
	);
};

Chats.defaultProps = {
	messages: [],
};

export default Chats;
