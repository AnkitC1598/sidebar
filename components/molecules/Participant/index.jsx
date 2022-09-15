import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { useSidebarStore } from "../../../store/store";
import { Tooltip } from "../../../submodules/shared/components/atoms";
import { Medal } from "../../../submodules/shared/icons";
import { classNames } from "../../../submodules/shared/utils";

const currentUser = "aVNhQHe1N8ZibeFmGh5zK8eAh9t2";

const getPositionColor = (position) => {
	switch (position) {
		case 1:
			return "text-yellow-500";
		case 2:
			return "text-slate-400";
		case 3:
			return "text-amber-700";
		default:
			return "text-gray-500";
	}
};

const Participant = ({ participant }) => {
	const dispatchToSidebar = useSidebarStore(
		(store) => store.dispatchToSidebar
	);

	return (
		<>
			<div className="flex items-center p-4">
				<div className="flex w-full flex-1 items-center space-x-2">
					<span className="w-6 flex justify-center items-center">
						{participant.position < 4 ? (
							<Medal
								className={classNames(
									"h-5 w-5",
									getPositionColor(participant.position)
								)}
							/>
						) : (
							<span className="text-sm font-medium text-slate-900 dark:text-slate-200 text-center">
								# {participant.position}
							</span>
						)}
					</span>
					<div className="relative flex-shrink-0">
						{participant.participantId ? (
							// <MeetingParticipantImage
							// 	participant={participant}
							// />
							<></>
						) : (
							<img
								src={
									participant.profileImage
										? participant.profileImage
										: `https://avatars.dicebear.com/api/initials/${participant.name}.svg`
								}
								alt={participant.name}
								className="square h-10 rounded-md"
							/>
						)}
						{!participant.isOnline ? (
							<span
								className={classNames(
									"absolute top-0 right-0 block h-2.5 w-2.5 -translate-y-1/4 translate-x-1/4 transform rounded-full ring-2 ring-neutral-50 dark:ring-neutral-900 bg-green-400"
								)}
								aria-hidden="true"
							/>
						) : null}
					</div>
					<div className="min-w-0 flex-1 px-2 md:grid md:gap-1">
						<div className="w-[80%] truncate">
							<div className="group relative flex space-x-1">
								<span
									className={classNames(
										"truncate text-sm font-medium text-slate-900 dark:text-slate-200",
										participant.participantId &&
											"!text-lu-500"
									)}
								>
									{currentUser === participant.uid
										? "You"
										: participant.name}
								</span>
								{["trainer", "admin", "moderator"].includes(
									participant.role.toLowerCase()
								) ? (
									<span
										className={classNames(
											"inline-flex items-center space-x-1 rounded px-2.5 py-0.5 text-xxs font-medium",
											participant.role === "trainer"
												? "bg-purple-100 text-purple-800"
												: participant.role === "trainer"
												? "bg-yellow-100 text-yellow-800"
												: "bg-green-100 text-green-800"
										)}
									>
										<span>
											{participant.role
												.charAt(0)
												.toUpperCase() +
												participant.role.slice(1)}
										</span>
									</span>
								) : null}
								<Tooltip
									position="top"
									label={`${participant.name} (${participant.role})`}
								/>
							</div>
							<a
								href={`https://letsupgrade.in/user/${participant.username}`}
								target="_blank"
								className="flex items-center text-xs text-slate-400 hover:text-lu-500 dark:text-slate-500"
								rel="noreferrer"
							>
								<span className="truncate">
									@{participant.username}
								</span>
							</a>
						</div>
					</div>
					<Menu as="div" className="relative inline-block text-left">
						<Menu.Button className="inline-flex items-center p-2 text-sm font-medium text-gray-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md focus:outline-none focus:ring-0">
							<span className="sr-only">Open options menu</span>
							<EllipsisVerticalIcon
								className="h-5 w-5"
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
												onClick={() =>
													dispatchToSidebar({
														type: "SET_OVERLAP_SECTION",
														payload: {
															component:
																"profile",
															props: {
																user: participant,
															},
														},
													})
												}
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
												onClick={() =>
													dispatchToSidebar({
														type: "SET_SIDEBAR_SECTION",
														payload: "chat",
													})
												}
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

export default Participant;
