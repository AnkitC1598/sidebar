import { Tab, Transition } from "@headlessui/react";
import {
	ArrowLeftOnRectangleIcon as ArrowLeftOnRectangleIconOutline,
	ChatBubbleBottomCenterTextIcon as ChatBubbleBottomCenterTextIconOutline,
	CodeBracketSquareIcon as CodeBracketSquareIconOutline,
	Cog6ToothIcon as Cog6ToothIconOutline,
	DocumentTextIcon as DocumentTextIconOutline,
	PaperClipIcon as PaperClipIconOutline,
	PuzzlePieceIcon as PuzzlePieceIconOutline,
	QueueListIcon as QueueListIconOutline,
	UserGroupIcon as UserGroupIconOutline
} from "@heroicons/react/24/outline";
import {
	ArrowLeftIcon,
	ArrowRightOnRectangleIcon as ArrowRightOnRectangleIconSolid,
	ChatBubbleBottomCenterTextIcon as ChatBubbleBottomCenterTextIconSolid,
	CodeBracketSquareIcon as CodeBracketSquareIconSolid,
	Cog6ToothIcon as Cog6ToothIconSolid,
	DocumentTextIcon as DocumentTextIconSolid,
	PaperClipIcon as PaperClipIconSolid,
	PuzzlePieceIcon as PuzzlePieceIconSolid,
	QueueListIcon as QueueListIconSolid,
	UserGroupIcon as UserGroupIconSolid
} from "@heroicons/react/24/solid";
import { Fragment, useMemo } from "react";
import {
	Chats,
	Doubts,
	PasteBin,
	Profile,
	Quiz,
	Settings, Topics, Users
} from "..";
import { useSidebarStore } from "../../../store/store";
import { Options, Tooltip } from "../../../submodules/shared/components/atoms";
import { classNames } from "../../../submodules/shared/utils";

const selectedColor = {
	topics: "bg-red-200 text-red-900 dark:bg-red-900 dark:text-red-200",
	chat: "bg-amber-200 text-amber-900 dark:bg-amber-900 dark:text-amber-200",
	doubts: "bg-lime-200 text-lime-900 dark:bg-lime-900 dark:text-lime-200",
	pastebin: "bg-teal-200 text-teal-900 dark:bg-teal-900 dark:text-teal-200",
	handouts: "bg-blue-200 text-blue-900 dark:bg-blue-900 dark:text-blue-200",
	quiz: "bg-purple-200 text-purple-900 dark:bg-purple-900 dark:text-purple-200",
	users: "bg-rose-200 text-rose-900 dark:bg-rose-900 dark:text-rose-200",
	profile:
		"bg-neutral-200 text-slate-900 dark:bg-neutral-800 dark:text-slate-200",
	settings:
		"bg-neutral-200 text-slate-900 dark:bg-neutral-800 dark:text-slate-200",
};

const hoverColor = {
	topics: "hover:bg-red-100 dark:hover:bg-red-800",
	chat: "hover:bg-amber-100 dark:hover:bg-amber-800",
	doubts: "hover:bg-lime-100 dark:hover:bg-lime-800",
	pastebin: "hover:bg-teal-100 dark:hover:bg-teal-800",
	handouts: "hover:bg-blue-100 dark:hover:bg-blue-800",
	quiz: "hover:bg-purple-100 dark:hover:bg-purple-800",
	users: "hover:bg-rose-100 dark:hover:bg-rose-800",
	profile: "hover:bg-neutral-200 dark:hover:bg-neutral-700",
	settings: "hover:bg-neutral-200 dark:hover:bg-neutral-700",
};

const Sidebar = ({
	enabledSections,
	toolTipDir,
	nestedEnabledSections,
	dispatchToApp,
}) => {
	if (Object.prototype.toString.call(enabledSections) !== "[object Array]")
		throw new Error("Sidebar: enabledSections must be an array of strings");

	const {
		userProfileImage,
		sideBarOpen,
		sideBarSection,
		overlapVisible,
		overlapTitle,
		overlapSubTitle,
		overlapImage,
		overlapOptions,
		overlapName,
		dispatchToSidebar,
	} = useSidebarStore((store) => ({
		userProfileImage: store.user?.profileImage,
		sideBarOpen: store.sideBarOpen,
		sideBarSection: store.sideBarSection,
		overlapVisible: store.overlapSection.visible,
		overlapTitle: store.overlapSection.title,
		overlapSubTitle: store.overlapSection.subtitle,
		overlapImage: store.overlapSection.image,
		overlapOptions: store.overlapSection.options,
		overlapName: store.overlapSection.name,
		dispatchToSidebar: store.dispatchToSidebar,
	}));

	const Tabs = useMemo(
		() =>
			[
				{
					label: "topics",
					component: <Topics />,
					// component: <Agendas />,
					outlineIcon: <QueueListIconOutline className="h-5 w-5" />,
					solidIcon: <QueueListIconSolid className="h-5 w-5" />,
					overlaps: [],
					selected: "",
					hover: "",
				},
				{
					label: "chat",
					component: (
						<Chats nestedEnabledSections={nestedEnabledSections} />
					),
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
					selected: "",
					hover: "",
				},
				{
					label: "doubts",
					component: <Doubts />,
					outlineIcon: (
						<CodeBracketSquareIconOutline className="h-5 w-5" />
					),
					solidIcon: (
						<CodeBracketSquareIconSolid className="h-5 w-5" />
					),
					overlaps: ["doubtView", "profile"],
					selected: "",
					hover: "",
				},
				{
					label: "pastebin",
					component: <PasteBin />,
					outlineIcon: (
						<DocumentTextIconOutline className="h-5 w-5" />
					),
					solidIcon: <DocumentTextIconSolid className="h-5 w-5" />,
					overlaps: [],
					selected: "",
					hover: "",
				},
				{
					label: "handouts",
					component: <></>,
					outlineIcon: <PaperClipIconOutline className="h-5 w-5" />,
					solidIcon: <PaperClipIconSolid className="h-5 w-5" />,
					overlaps: [],
					selected: "",
					hover: "",
				},
				{
					label: "quiz",
					component: <Quiz />,
					outlineIcon: <PuzzlePieceIconOutline className="h-5 w-5" />,
					solidIcon: <PuzzlePieceIconSolid className="h-5 w-5" />,
					overlaps: ["quizView", "quizResult", "profile"],
					selected: "",
					hover: "",
				},
				{
					label: "users",
					component: <Users />,
					outlineIcon: <UserGroupIconOutline className="h-5 w-5" />,
					solidIcon: <UserGroupIconSolid className="h-5 w-5" />,
					overlaps: ["profile"],
					selected: "",
					hover: "",
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
					selected: "",
					hover: "",
				},
				{
					label: "settings",
					component: <Settings dispatchToApp={dispatchToApp} />,
					outlineIcon: <Cog6ToothIconOutline className="h-5 w-5" />,
					solidIcon: <Cog6ToothIconSolid className="h-5 w-5" />,
					overlaps: [],
					selected: "",
					hover: "",
				},
			].filter((tab) => enabledSections.includes(tab.label)),
		[enabledSections, nestedEnabledSections]
	);

	const findTabIndex = (tabLabel) => {
		const found = Tabs.filter((tab) =>
			enabledSections.includes(tab.label)
		).findIndex((tab) => tab.label === tabLabel);
		if (found) return found;
		return 0;
	};

	const toggleSidebar = () =>
		dispatchToSidebar({
			type: "TOGGLE_SIDEBAR_STATE",
		});

	const goBackOverlap = () =>
		dispatchToSidebar({
			type: "GO_BACK_OVERLAP_SECTION",
		});

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
							{Tabs.map((tab) => (
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
												// selectedColor[tab.label]
												selected && sideBarOpen
													? selectedColor[tab.label]
													: `bg-neutral-50 text-slate-900 dark:bg-neutral-900 dark:text-slate-200 ${
															hoverColor[
																tab.label
															]
													  }`
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
									onClick={toggleSidebar}
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
								{Tabs.map((tab) => (
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
														className="h-9 w-9 dark:hover:bg-neutral-800 hover:bg-neutral-200 p-2 rounded-md cursor-pointer"
														onClick={goBackOverlap}
													/>
													{overlapImage
														? overlapImage
														: null}
													<span className="flex-1 flex flex-col">
														<span>
															{overlapTitle}
														</span>
														{overlapSubTitle ? (
															<span className="text-xs text-slate-500">
																{
																	overlapSubTitle
																}
															</span>
														) : null}
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
		"topics",
		"chat",
		"doubts",
		"pastebin",
		"handouts",
		"quiz",
		"users",
		"profile",
		"settings",
	],
	toolTipDir: "left",
	nestedEnabledSections: ["live", "discussion", "inbox"],
};

export default Sidebar;
