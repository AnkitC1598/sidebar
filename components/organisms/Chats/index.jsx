import { Menu, Tab, Transition } from "@headlessui/react";
import {
	InboxIcon as InboxIconOutline,
	PlusIcon,
	SignalIcon as SignalIconOutline,
	UserGroupIcon as UserGroupIconOutline,
} from "@heroicons/react/24/outline";
import {
	InboxIcon as InboxIconSolid,
	SignalIcon as SignalIconSolid,
	UserGroupIcon as UserGroupIconSolid,
} from "@heroicons/react/24/solid";
import { Fragment, useMemo } from "react";
import { InboxChats, LinearChats } from "..";
import { useSidebarStore } from "../../../store/store";
import { classNames } from "../../../submodules/shared/utils";

const Chats = ({ nestedEnabledSections }) => {
	const {
		sideBarNestedSection,
		overlapVisible,
		OverlapComponent,
		overlapProps,
		overlapName,
		dispatchToSidebar,
	} = useSidebarStore((store) => ({
		sideBarNestedSection: store.sideBarNestedSection,
		overlapVisible: store.overlapSection.visible,
		OverlapComponent: store.overlapSection.Component,
		overlapProps: store.overlapSection.props,
		overlapName: store.overlapSection.name,
		dispatchToSidebar: store.dispatchToSidebar,
	}));

	const Tabs = useMemo(
		() =>
			[
				{
					label: "live",
					solidIcon: (
						<SignalIconSolid className="h-5 w-5 rounded-md" />
					),
					outlineIcon: (
						<SignalIconOutline className="h-5 w-5 rounded-md" />
					),
					component: <LinearChats />,
				},
				{
					label: "discussion",
					solidIcon: (
						<UserGroupIconSolid className="h-5 w-5 rounded-md" />
					),
					outlineIcon: (
						<UserGroupIconOutline className="h-5 w-5 rounded-md" />
					),
					component: <LinearChats />,
				},
				{
					label: "inbox",
					solidIcon: (
						<InboxIconSolid className="h-5 w-5 rounded-md" />
					),
					outlineIcon: (
						<InboxIconOutline className="h-5 w-5 rounded-md" />
					),
					component: <InboxChats />,
				},
			].filter((tab) => nestedEnabledSections.includes(tab.label)),
		[nestedEnabledSections]
	);
	console.log("nestedEnabledSections", nestedEnabledSections);
	console.log(
		"map",
		Tabs.map((tab) => tab.label)
	);
	console.log(
		"filter",
		Tabs.filter((tab) => nestedEnabledSections.includes(tab.label)).map(
			(tab) => tab.label
		)
	);

	const findTabIndex = (tabLabel) => {
		const found = Tabs.filter((tab) =>
			nestedEnabledSections.includes(tab.label)
		).findIndex((tab) => tab.label === tabLabel);
		if (found) return found;
		return 0;
	};

	console.log(findTabIndex());

	const createNewChat = (reason) =>
		dispatchToSidebar({
			type: "SET_OVERLAP_SECTION",
			payload: {
				component: "newChatOrGroup",
				title: `New ${reason}`,
				props: {
					intent: reason.toLowerCase(),
				},
			},
		});
	return (
		<>
			<div className="flex w-full flex-col bg-neutral-50 text-slate-900 h-screen-ios dark:bg-neutral-900 dark:text-slate-200 h-navScreen divide-y divide-neutral-200 dark:divide-neutral-800 relative">
				{overlapVisible &&
				[
					"inboxChat",
					"inboxChatDetail",
					"profile",
					"newChatOrGroup",
					"newChat",
				].includes(overlapName) ? (
					<OverlapComponent {...overlapProps} />
				) : (
					<>
						<Tab.Group
							selectedIndex={findTabIndex(sideBarNestedSection)}
							onChange={(idx) => {
								dispatchToSidebar({
									type: "SET_SIDEBAR_SECTION_NESTED",
									payload: nestedEnabledSections[idx],
								});
							}}
						>
							<Tab.List className="flex">
								{Tabs.map((tab) => (
									<Tab
										key={tab.label + "tab"}
										className="w-full py-2.5 text-sm font-medium leading-5 focus:outline-none transition-all duration-200 focus:ring-0 focus:bg-transparent flex flex-col justify-center items-center space-y-1 relative bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800"
									>
										{({ selected }) => (
											<>
												{selected
													? tab.solidIcon
													: tab.outlineIcon}
												<span
													span
													className="sr-only capitalize"
												>
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
													<span className="w-2/3 mx-auto absolute -bottom-1 inset-x-0 transition-all duration-200 border-t-4 h-2 rounded-sm border-amber-900 dark:border-amber-200" />
												</Transition>
											</>
										)}
									</Tab>
								))}
							</Tab.List>
							<Tab.Panels className="w-full h-full bg-neutral-50 dark:bg-neutral-900 h-chatPanel">
								{Tabs.map((tab) => (
									<Tab.Panel
										key={tab.label + "component"}
										className={classNames(
											"w-full divide-y divide-neutral-200 bg-neutral-50 outline-none transition-all duration-200 dark:divide-neutral-800 dark:bg-neutral-900 h-full",
											overlapVisible &&
												overlapName === "inboxChat" &&
												"h-chatTab"
										)}
									>
										{tab.component}
									</Tab.Panel>
								))}
							</Tab.Panels>
						</Tab.Group>
						{/* <span className="absolute bottom-6 right-6 rounded-md flex items-center justify-center p-2 bg-neutral-100 dark:bg-neutral-800">
							<PlusIcon className="h-8 w-8 dark:text-slate-200 text-slate-900" />
						</span> */}
						<Menu
							as="div"
							className="absolute bottom-6 right-6 inline-block border-none"
						>
							<Menu.Button className="rounded-md flex items-center justify-center p-2 bg-neutral-200 dark:bg-neutral-800">
								<PlusIcon className="h-8 w-8 dark:text-slate-200 text-slate-900" />
							</Menu.Button>
							<Transition
								as={Fragment}
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95"
							>
								<Menu.Items className="absolute right-0 bottom-full mb-2 w-max origin-top-right bg-neutral-50 dark:bg-neutral-800 rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
									<div className="px-1 py-1">
										<Menu.Item>
											{({ active }) => (
												<button
													className={classNames(
														active
															? "bg-neutral-200 dark:bg-neutral-600 text-slate-900 dark:text-slate-200"
															: "bg-neutral-50 dark:bg-neutral-800 text-slate-900 dark:text-slate-200",
														"rounded-md px-4 py-2 text-sm flex space-x-2 w-full"
													)}
													onClick={() =>
														createNewChat("Chat")
													}
												>
													Start a Chat
												</button>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<button
													className={classNames(
														active
															? "bg-neutral-200 dark:bg-neutral-600 text-slate-900 dark:text-slate-200"
															: "bg-neutral-50 dark:bg-neutral-800 text-slate-900 dark:text-slate-200",
														"rounded-md px-4 py-2 text-sm flex space-x-2 w-full"
													)}
													onClick={() =>
														createNewChat("Group")
													}
												>
													Create Group
												</button>
											)}
										</Menu.Item>
									</div>
								</Menu.Items>
							</Transition>
						</Menu>
					</>
				)}
			</div>
		</>
	);
};

export default Chats;
