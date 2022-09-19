import { Tab, Transition } from "@headlessui/react";
import {
	ArrowLeftOnRectangleIcon as ArrowLeftOnRectangleIconOutline,
	ChatBubbleBottomCenterTextIcon as ChatBubbleBottomCenterTextIconOutline,
	ClipboardDocumentListIcon as ClipboardDocumentListIconOutline,
	Cog6ToothIcon as Cog6ToothIconOutline,
	FolderIcon as FolderIconOutline,
	HandRaisedIcon as HandRaisedIconOutline,
	UserGroupIcon as UserGroupIconOutline,
} from "@heroicons/react/24/outline";
import {
	ArrowLeftIcon,
	ArrowRightOnRectangleIcon as ArrowRightOnRectangleIconSolid,
	ChatBubbleBottomCenterTextIcon as ChatBubbleBottomCenterTextIconSolid,
	ClipboardDocumentListIcon as ClipboardDocumentListIconSolid,
	Cog6ToothIcon as Cog6ToothIconSolid,
	FolderIcon as FolderIconSolid,
	HandRaisedIcon as HandRaisedIconSolid,
	UserGroupIcon as UserGroupIconSolid,
} from "@heroicons/react/24/solid";
import { Fragment, useMemo } from "react";
import { Agendas, Chats, Doubts, PasteBin, Profile, Settings, Users } from "..";
import { useSidebarStore } from "../../../store/store";
import { Options, Tooltip } from "../../../submodules/shared/components/atoms";
import { classNames } from "../../../submodules/shared/utils";

const Sidebar = ({ enabledSections, toolTipDir }) => {
	if (Object.prototype.toString.call(enabledSections) !== "[object Array]")
		return null;

	const {
		userProfileImage,
		sideBarOpen,
		sideBarSection,
		overlapVisible,
		overlapTitle,
		overlapOptions,
		overlapName,
		dispatchToSidebar,
	} = useSidebarStore((store) => ({
		userProfileImage: store.user?.profileImage,
		sideBarOpen: store.sideBarOpen,
		sideBarSection: store.sideBarSection,
		overlapVisible: store.overlapSection.visible,
		overlapTitle: store.overlapSection.title,
		overlapOptions: store.overlapSection.options,
		overlapName: store.overlapSection.name,
		dispatchToSidebar: store.dispatchToSidebar,
	}));

	const Tabs = useMemo(
		() => [
			{
				label: "agenda",
				component: <Agendas />,
				outlineIcon: (
					<ClipboardDocumentListIconOutline className="h-5 w-5" />
				),
				solidIcon: (
					<ClipboardDocumentListIconSolid className="h-5 w-5" />
				),
				overlaps: [],
			},
			{
				label: "chat",
				component: <Chats />,
				outlineIcon: (
					<ChatBubbleBottomCenterTextIconOutline className="h-5 w-5" />
				),
				solidIcon: (
					<ChatBubbleBottomCenterTextIconSolid className="h-5 w-5" />
				),
				overlaps: [
					"inboxChat",
					"inboxChatDetail",
					"profile",
					"newChatOrGroup",
				],
			},
			{
				label: "doubt",
				component: <Doubts />,
				outlineIcon: <HandRaisedIconOutline className="h-5 w-5" />,
				solidIcon: <HandRaisedIconSolid className="h-5 w-5" />,
				overlaps: [],
			},
			{
				label: "pastebin",
				component: <PasteBin />,
				outlineIcon: <FolderIconOutline className="h-5 w-5" />,
				solidIcon: <FolderIconSolid className="h-5 w-5" />,
				overlaps: [],
			},
			{
				label: "users",
				component: <Users />,
				outlineIcon: <UserGroupIconOutline className="h-5 w-5" />,
				solidIcon: <UserGroupIconSolid className="h-5 w-5" />,
				overlaps: ["profile"],
			},
			{
				label: "profile",
				component: <Profile />,
				icon: (
					<img
						className="aspect-square h-7 w-7 rounded-md"
						src={userProfileImage}
					/>
				),
				overlaps: [],
			},
			{
				label: "settings",
				component: <Settings />,
				outlineIcon: <Cog6ToothIconOutline className="h-5 w-5" />,
				solidIcon: <Cog6ToothIconSolid className="h-5 w-5" />,
				overlaps: [],
			},
		],
		[]
	);

	const findTabIndex = (tabLabel) => {
		const found = Tabs.filter((tab) =>
			enabledSections.includes(tab.label)
		).findIndex((tab) => tab.label === tabLabel);
		if (found) return found;
		return 0;
	};

	return (
		<>
			<div className="relative flex h-full w-full bg-neutral-50 dark:bg-neutral-900">
				<>
					<Tab.Group
						selectedIndex={findTabIndex(sideBarSection)}
						onChange={(idx) => {
							dispatchToSidebar({
								type: "SET_SIDEBAR_SECTION",
								payload: enabledSections[idx],
							});
							dispatchToSidebar({
								type: "RESET_OVERLAP_SECTION",
							});
						}}
					>
						<Tab.List className="z-20 h-screen h-screen-ios flex flex-col border-x border-neutral-200 dark:border-neutral-800 bg-neutral-50 px-2 py-3 dark:bg-neutral-900 space-y-5 md:rounded-none md:p-2 md:pr-2">
							{Tabs.filter((tab) =>
								enabledSections.includes(tab.label)
							).map((tab) => (
								<span
									key={tab.label}
									className={classNames(
										tab.label === "profile"
											? "flex flex-grow flex-col justify-end space-y-3"
											: ""
									)}
								>
									<Tab
										className={({ selected }) =>
											classNames(
												"group relative flex aspect-square w-full flex-col items-center justify-center rounded-md text-sm transition-all duration-500 focus-visible:outline-0",
												selected && sideBarOpen
													? "bg-neutral-200 text-slate-900 dark:bg-neutral-800 dark:text-slate-100"
													: "bg-neutral-50 text-slate-900 hover:bg-neutral-200 dark:bg-neutral-900 dark:text-slate-200 dark:hover:bg-neutral-700"
											)
										}
									>
										{({ selected }) => (
											<>
												{tab.icon
													? tab.icon
													: selected
													? tab.solidIcon
													: tab.outlineIcon}
												<Tooltip
													position={toolTipDir}
													label={tab.label}
												/>
											</>
										)}
									</Tab>
								</span>
							))}
							<span
								className={classNames(
									enabledSections.includes("profile")
										? ""
										: "flex flex-grow flex-col justify-end space-y-3"
								)}
							>
								<span
									className="group relative flex aspect-square w-full flex-col items-center justify-center rounded-full p-3 text-sm transition-all duration-500 focus-visible:outline-0 bg-neutral-50 text-slate-900 hover:bg-neutral-200 dark:bg-neutral-900 dark:text-slate-200 dark:hover:bg-neutral-700"
									onClick={() =>
										dispatchToSidebar({
											type: "TOGGLE_SIDEBAR_STATE",
										})
									}
								>
									{sideBarOpen ? (
										<ArrowRightOnRectangleIconSolid className="h-5 w-5" />
									) : (
										<ArrowLeftOnRectangleIconOutline className="h-5 w-5" />
									)}
									<Tooltip
										position={toolTipDir}
										label={
											sideBarOpen
												? "Close Sidebar"
												: "Open Sidebar"
										}
									/>
								</span>
							</span>
						</Tab.List>
						<Transition
							as={Fragment}
							show={sideBarOpen}
							enter="transition ease-in-out duration-500 transform"
							enterFrom="translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-500 transform"
							leaveFrom="translate-x-0"
							leaveTo="translate-x-full"
						>
							<Tab.Panels className="z-10 w-full bg-neutral-50 dark:bg-neutral-900 border-x border-neutral-200 dark:border-neutral-800">
								{Tabs.filter((tab) =>
									enabledSections.includes(tab.label)
								).map((tab) => (
									<Tab.Panel
										key={tab.label}
										className="h-full w-full divide-y divide-neutral-200 bg-neutral-50 outline-none transition-all duration-500 dark:divide-neutral-800 dark:bg-neutral-900"
									>
										<div className="flex h-16 w-full items-center space-x-2 bg-neutral-50 py-2 px-4 text-slate-900 dark:bg-neutral-900 dark:text-slate-200">
											{overlapVisible &&
											tab.overlaps.includes(
												overlapName
											) ? (
												<span className="w-full flex space-x-3 items-center">
													<ArrowLeftIcon
														className="h-10 w-10 dark:hover:bg-neutral-800 hover:bg-neutral-200 p-2 rounded-md"
														onClick={() =>
															dispatchToSidebar({
																type: "GO_BACK_OVERLAP_SECTION",
															})
														}
													/>
													<span className="flex-1 text-xl line-clamp-1">
														{overlapTitle}
													</span>
													{overlapOptions ? (
														<Options
															options={
																overlapOptions
															}
														/>
													) : null}
												</span>
											) : (
												<span className="flex-1 text-xl capitalize">
													{tab.label}
												</span>
											)}
										</div>
										{tab.component}
									</Tab.Panel>
								))}
							</Tab.Panels>
						</Transition>
					</Tab.Group>
				</>
			</div>
		</>
	);
};

Sidebar.defaultProps = {
	enabledSections: [
		// "agenda",
		"chat",
		// "doubt",
		"pastebin",
		"users",
		"profile",
		"settings",
	],
	toolTipDir: "left",
};

export default Sidebar;
