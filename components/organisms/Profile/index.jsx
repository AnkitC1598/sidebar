import {
	BanknotesIcon,
	CakeIcon,
	ChatBubbleBottomCenterTextIcon,
	MapPinIcon,
	UserPlusIcon,
} from "@heroicons/react/24/outline";
import { CheckBadgeIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { formatDate } from "../../../../shared/utils";
import { useSidebarStore } from "../../../store/store";
import { Options, Tooltip } from "../../../submodules/shared/components/atoms";
import {
	Facebook,
	Github,
	Instagram,
	Linkedin,
	Twitter,
	UserFollowed,
} from "../../../submodules/shared/icons";

const getSocialIcon = (name) => {
	switch (name) {
		case "facebook":
			return Facebook;
		case "twitter":
			return Twitter;
		case "instagram":
			return Instagram;
		case "linkedin":
			return Linkedin;
		case "github":
			return Github;
		default:
			return GlobeAltIcon;
	}
};

const Profile = () => {
	const { user, dispatchToSidebar } = useSidebarStore((store) => ({
		user: store.user,
		dispatchToSidebar: store.dispatchToSidebar,
	}));
	const [followed, setFollowed] = useState(false);

	const copyProfileLink = () => console.log("ProfileLinkCopy");

	const toggleFollowUser = () => setFollowed((prev) => !prev);

	return (
		<>
			<div className="flex w-full flex-col bg-neutral-50 text-slate-900 dark:bg-neutral-900 dark:text-slate-200 h-navScreen h-screen-ios divide-y divide-gray-200">
				<div>
					<div className="h-32 bg-transparent overflow-hidden flex items-center shadow-2xl dark:shadow-gray-900">
						<img
							src={user?.coverImage}
							alt={user?.name}
							className="flex-1"
						/>
					</div>
					<div className="relative lg:-mt-15 -mt-12 flow-root px-4 pb-5">
						<div className="-m-1 flex justify-center">
							<div className="inline-flex relative rounded-lg border-4 border-neutral-900 dark:border-neutral-50 z-20">
								<img
									className="h-24 w-24 flex-shrink-0"
									src={user?.profileImage}
									alt={user?.name}
								/>
								<span
									className="absolute bottom-0 right-0 block h-4 w-4 translate-y-1/2 translate-x-1/2 transform rounded-full ring-2 ring-neutral-900 dark:ring-neutral-50 bg-green-400"
									aria-hidden="true"
								/>
							</div>
						</div>
						<div className="mt-8 flex flex-col space-y-4">
							<div className="flex flex-col justify-center text-center items-center space-y-1">
								<div className="flex justify-center items-center space-x-2 text-purple-500 dark:text-purple-400">
									<h3 className="text-xl font-bold text-slate-900 dark:text-slate-200 leading-none">
										{user?.name}
									</h3>
									{user?.verified ? (
										<CheckBadgeIcon className="h-5 w-5 flex-1" />
									) : null}
									{/* <span className="inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
										<span className="sr-only">Online</span>
									</span> */}
								</div>
								<span className="flex items-center space-x-2">
									<p className="text-sm text-slate-500 dark:text-slate-400">
										@{user?.username}
									</p>
									{user?.title ? (
										<>
											<span className="inline-block h-1 w-1 flex-shrink-0 rounded-full bg-neutral-500"></span>
											<p className="text-sm text-slate-500 dark:text-slate-400">
												{user?.title}
											</p>
										</>
									) : null}
								</span>
							</div>

							<div className="flex flex-col justify-center text-center items-center space-y-8">
								{user?.bio ? (
									<span className="text-sm text-slate-500 dark:text-slate-400">
										{user?.bio}
									</span>
								) : null}
								<div className="flex flex-col justify-center text-center items-center space-y-4">
									<div className="flex flex-col space-y-1">
										<div className="flex justify-between space-x-8">
											<span className="flex items-center space-x-1">
												<BanknotesIcon className="h-4 w-4" />
												<span className="text-sm text-slate-900 dark:text-slate-200">
													{user?.coins} coins
												</span>
											</span>
											<span className="flex items-center space-x-1">
												<MapPinIcon className="h-4 w-4" />
												<span className="text-sm text-slate-900 dark:text-slate-200">
													India
												</span>
											</span>
										</div>
										<span className="flex items-center space-x-1">
											<CakeIcon className="h-4 w-4" />
											<span className="text-sm text-slate-900 dark:text-slate-200">
												Joined on{" "}
												{
													formatDate(user?.createdAt)
														.normal
												}
											</span>
										</span>
									</div>
									<div className="flex flex-col divide-y divide-neutral-300 dark:divide-neutral-700">
										<div className="flex bg-neutral-200 dark:bg-neutral-800 px-4 py-3 mb-5 rounded-xl divide-x divide-neutral-400 dark:divide-neutral-700">
											<div className="flex my-auto leading-none space-x-3 pl-2 pr-4">
												<div className="text-[28px] font-bold text-neutral-500 flex-1 text-center">
													{"5".padStart(2, "0")}
												</div>
												<div className="text-xs text-left w-min">
													Programs Enrolled
												</div>
											</div>
											<div className="flex my-auto leading-none space-x-3 pr-2 pl-4">
												<div className="text-[28px] font-bold text-neutral-500 flex-1 text-center">
													{"3".padStart(2, "0")}
												</div>
												<div className="text-xs text-left w-min">
													Certificates Earned
												</div>
											</div>
										</div>
										<div className="pt-5 flex justify-evenly divide-x divide-neutral-400 dark:divide-neutral-700">
											<span className="w-3/6 text-sm text-slate-900 dark:text-slate-200 flex justify-evenly">
												<ChatBubbleBottomCenterTextIcon
													className="h-9 w-9 text-slate-700 dark:text-slate-200 hover:bg-purple-900 dark:hover:bg-purple-500 border dark:border-neutral-200 dark:hover:border-purple-500 p-2 rounded-md shadow-sm"
													onClick={() =>
														dispatchToSidebar({
															type: "SET_SIDEBAR_SECTION",
															payload: "chat",
														})
													}
												/>
												<span
													onClick={toggleFollowUser}
												>
													{followed ? (
														<UserFollowed className="h-9 w-9 text-slate-700 dark:text-slate-200 bg-purple-900 dark:bg-purple-500 border dark:border-neutral-200 p-2 rounded-md shadow-sm" />
													) : (
														<UserPlusIcon className="h-9 w-9 text-slate-700 dark:text-slate-200  border dark:border-neutral-200 p-2 rounded-md shadow-sm" />
													)}
												</span>
											</span>
											{user?.socials ? (
												<span className="w-4/6 text-sm text-slate-900 dark:text-slate-200 flex justify-evenly">
													{Object.keys(
														user?.socials
													).map((socialName) => {
														const SocialIcon =
															getSocialIcon(
																socialName
															);
														const socialUrl =
															user?.socials[
																socialName
															];
														return (
															<a
																key={socialName}
																href={socialUrl}
																target="_blank"
																rel="noopener noreferrer"
																className="group relative flex justify-center"
															>
																<SocialIcon className="h-9 w-9 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-slate-400 border dark:border-neutral-200 p-2 rounded-md shadow-sm" />
																<Tooltip
																	position="top"
																	label={
																		socialName
																	}
																/>
															</a>
														);
													})}
												</span>
											) : null}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="absolute right-2 top-14 inline-flex sm:ml-0">
							<Options
								options={[
									{
										label: "Edit profile",
										isExternalLink: true,
										link: `https://letsupgrade.in/user/${user?.username}/edit`,
									},
									{
										label: "Copy profile link",
										action: copyProfileLink,
									},
								]}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
