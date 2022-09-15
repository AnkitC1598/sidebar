import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import React, { Fragment } from "react";
import { classNames } from "../../../submodules/shared/utils";

const InboxChatPreview = ({ chat }) => {
	return (
		<>
			<div className="group flex w-full flex-1 items-center space-x-2">
				<div className="relative flex-shrink-0">
					<img
						src={chat.chatIcon}
						alt={chat.chatName}
						className="square h-10 rounded-md"
					/>
				</div>
				<div className="min-w-0 flex-1 px-2 md:grid md:gap-1">
					<div className="w-[80%] truncate">
						<div className="group relative flex space-x-1">
							<span className="truncate text-sm font-medium text-slate-900 dark:text-slate-200">
								{chat.chatName}
							</span>
						</div>
						<span className="flex items-center text-xs text-slate-400 dark:text-slate-500">
							<span className="truncate">
								{chat.lastMessage.message}
							</span>
						</span>
					</div>
				</div>
				<div className="flex flex-col">
					<div className="text-xs text-slate-900 dark:text-slate-200">
						{chat.lastMessage.time}
					</div>
					<Menu as="div" className="relative inline-block text-left">
						<Menu.Button className="inline-flex items-center p-2 text-sm font-medium text-gray-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md focus:outline-none focus:ring-0">
							<span className="sr-only">Open options menu</span>
							<ChevronDownIcon
								className="h-4 w-4"
								aria-hidden="true"
							/>
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
							<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-neutral-50 dark:bg-neutral-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
								<div className="p-1">
									<Menu.Item>
										{({ active }) => (
											<span
												className={classNames(
													active
														? "bg-neutral-200 dark:bg-neutral-600 text-slate-900 dark:text-slate-200"
														: "bg-neutral-50 dark:bg-neutral-800 text-slate-900 dark:text-slate-200",
													"rounded-md block px-4 py-2 text-sm"
												)}
												// onClick={() =>
												// 	dispatchToSidebar({
												// 		type: "SET_OVERLAP_SECTION",
												// 		payload: {
												// 			component:
												// 				"profile",
												// 			props: {
												// 				user: participant,
												// 			},
												// 		},
												// 	})
												// }
											>
												View Profile
											</span>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<span
												className={classNames(
													active
														? "bg-neutral-200 dark:bg-neutral-600 text-slate-900 dark:text-slate-200"
														: "bg-neutral-50 dark:bg-neutral-800 text-slate-900 dark:text-slate-200",
													"rounded-md block px-4 py-2 text-sm"
												)}
												// onClick={() =>
												// 	dispatchToSidebar({
												// 		type: "SET_SIDEBAR_SECTION",
												// 		payload: "chat",
												// 	})
												// }
											>
												Send Message
											</span>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</div>
			</div>
		</>
	);
};

export default InboxChatPreview;
