import { GlobeAltIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useSidebarStore } from "../../../store/store";
import { Options, Tooltip } from "../../../submodules/shared/components/atoms";
import {
	Facebook,
	Github,
	Instagram,
	Linkedin,
	Twitter,
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

	const copyProfileLink = () => console.log("ProfileLinkCopy");

	return (
		<>
			<div className="flex w-full flex-col bg-neutral-50 text-slate-900 dark:bg-neutral-900 dark:text-slate-200 h-navScreen h-screen-ios divide-y divide-gray-200">
				<div>
					<div className="h-32 bg-transparent overflow-hidden flex items-center shadow-2xl dark:shadow-gray-900">
						<img
							src={user?.bannerImg}
							alt={user?.name}
							className="flex-1"
						/>
					</div>
					<div className="lg:-mt-15 -mt-12 flow-root px-4 pb-5">
						<div className="-m-1 flex">
							<div className="inline-flex overflow-hidden rounded-lg border-4 border-white z-20">
								<img
									className="h-24 w-24 flex-shrink-0"
									src={user?.profileImage}
									alt={user?.name}
								/>
							</div>
						</div>
						<div className="mt-6">
							<div className="flex justify-between items-center space-x-3">
								<div className="flex flex-col">
									<div className="flex items-center">
										<h3 className="text-xl font-bold text-slate-900 dark:text-slate-200">
											{user?.name}
										</h3>
										<span className="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
											<span className="sr-only">
												Online
											</span>
										</span>
									</div>
									<p className="text-sm text-slate-500 dark:text-slate-400">
										@{user?.username}
									</p>
								</div>
								<div className="inline-flex sm:ml-0">
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

							<div className="mt-5 flex flex-wrap space-x-3">
								<button
									type="button"
									className="inline-flex w-1/2 flex-shrink-0 items-center justify-center rounded-md border border-transparent bg-purple-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-0 sm:flex-1"
									onClick={() =>
										dispatchToSidebar({
											type: "SET_SIDEBAR_SECTION",
											payload: "chat",
										})
									}
								>
									Message
								</button>
								<button
									type="button"
									className="inline-flex w-1/2 flex-1 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-0"
								>
									Follow
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="px-4 py-5 h-full overflow-y-scroll scrollbar-hide">
					<div className="space-y-4">
						<div className="flex flex-col space-y-1">
							<span className="text-sm font-medium text-slate-500 dark:text-slate-400">
								Title
							</span>
							<span className="text-sm text-slate-900 dark:text-slate-200">
								{user?.title}
							</span>
						</div>
						<div className="flex flex-col space-y-1">
							<span className="text-sm font-medium text-slate-500 dark:text-slate-400">
								Bio
							</span>
							<span className="text-sm text-slate-900 dark:text-slate-200">
								{user?.bio}
							</span>
						</div>
						<div className="flex flex-col space-y-1">
							<span className="text-sm font-medium text-slate-500 dark:text-slate-400">
								Email
							</span>
							<span>
								<a
									href={`mailto: ${user?.email}`}
									className="text-sm text-slate-900 dark:text-slate-200 hover:text-lu-500"
								>
									{user?.email}
								</a>
							</span>
						</div>
						<div className="flex flex-col space-y-1">
							<span className="text-sm font-medium text-slate-500 dark:text-slate-400">
								Phone Number
							</span>
							<span>
								<a
									href={`tel: ${user?.number}`}
									className="text-sm text-slate-900 dark:text-slate-200"
								>
									{user?.number}
								</a>
							</span>
						</div>
						<div className="flex flex-col space-y-1">
							<span className="text-sm font-medium text-slate-500 dark:text-slate-400">
								Location
							</span>
							<span className="text-sm text-slate-900 dark:text-slate-200">
								{user?.location}
							</span>
						</div>
						<div className="flex flex-col space-y-1">
							<span className="text-sm font-medium text-slate-500 dark:text-slate-400">
								Learning Hours
							</span>
							<span className="text-sm text-slate-900 dark:text-slate-200">
								{user?.learningHours}
							</span>
						</div>
						<div className="flex flex-col space-y-2">
							<span className="text-sm font-medium text-slate-500 dark:text-slate-400">
								Socials
							</span>
							<span className="text-sm text-slate-900 dark:text-slate-200 grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
								{Object.keys(user?.socials).map((socialName) => {
									const SocialIcon =
										getSocialIcon(socialName);
									const socialUrl = user?.socials[socialName];
									return (
										<a
											key={socialName}
											href={socialUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="group relative flex"
										>
											<SocialIcon className="h-9 w-9 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-slate-400 border dark:border-neutral-200 p-2 rounded-md shadow-sm" />
											<Tooltip
												position="top"
												label={socialName}
											/>
										</a>
									);
								})}
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
