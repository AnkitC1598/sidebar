import { useState } from "react";
import { useSidebarStore } from "../../../store/store";
import { Search } from "../../../submodules/shared/components/atoms";
import { Participant } from "../../molecules";

const participants = [
	{
		uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t21",
		bannerImg: "https://source.unsplash.com/1600x900/?technology",
		profileImage:
			"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
		name: "Vinay Ambast",
		username: "VinayAmbast",
		email: "ashleyporter@email.com",
		number: "+911234567890",
		title: "Code Storming 💻",
		bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, voluptas! Consequuntur quis ullam accusantium.",
		location: "New York, NY, USA",
		learningHours: "500",
		socials: {
			twitter: "http://twitter.com",
			instagram: "https://instagram.com",
			linkedin: "https://linkedin.com",
			facebook: "https://facebook.com",
			github: "https://github.com",
			web: "https://letsupgrade.in",
		},
		role: "student",
		handRaiseStatus: null,
		lastDoubtId: null,
		permissions: { chat: { isBanned: false, time: 0 } },
	},
	{
		uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t22",
		bannerImg: "https://source.unsplash.com/1600x900/?technology",
		profileImage:
			"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
		name: "Nidhi Tripathi",
		username: "NidhiTripathi",
		email: "ashleyporter@email.com",
		number: "+911234567890",
		title: "Code Storming 💻",
		bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, voluptas! Consequuntur quis ullam accusantium.",
		location: "New York, NY, USA",
		learningHours: "500",
		socials: {
			twitter: "http://twitter.com",
			instagram: "https://instagram.com",
			linkedin: "https://linkedin.com",
			facebook: "https://facebook.com",
			github: "https://github.com",
			web: "https://letsupgrade.in",
		},
		role: "student",
		handRaiseStatus: null,
		lastDoubtId: null,
		permissions: { chat: { isBanned: false, time: 0 } },
	},
	{
		uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t23",
		bannerImg: "https://source.unsplash.com/1600x900/?technology",
		profileImage:
			"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
		name: "Niketa Lobo",
		username: "NiketaLobo",
		email: "ashleyporter@email.com",
		number: "+911234567890",
		title: "Code Storming 💻",
		bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, voluptas! Consequuntur quis ullam accusantium.",
		location: "New York, NY, USA",
		learningHours: "500",
		socials: {
			twitter: "http://twitter.com",
			instagram: "https://instagram.com",
			linkedin: "https://linkedin.com",
			facebook: "https://facebook.com",
			github: "https://github.com",
			web: "https://letsupgrade.in",
		},
		role: "student",
		handRaiseStatus: null,
		lastDoubtId: null,
		permissions: { chat: { isBanned: false, time: 0 } },
	},
	{
		uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t24",
		bannerImg: "https://source.unsplash.com/1600x900/?technology",
		profileImage:
			"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
		name: "Prasanna Sawant",
		username: "PrasannaSawant",
		email: "ashleyporter@email.com",
		number: "+911234567890",
		title: "Code Storming 💻",
		bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, voluptas! Consequuntur quis ullam accusantium.",
		location: "New York, NY, USA",
		learningHours: "500",
		socials: {
			twitter: "http://twitter.com",
			instagram: "https://instagram.com",
			linkedin: "https://linkedin.com",
			facebook: "https://facebook.com",
			github: "https://github.com",
			web: "https://letsupgrade.in",
		},
		role: "student",
		handRaiseStatus: null,
		lastDoubtId: null,
		permissions: { chat: { isBanned: false, time: 0 } },
	},
	{
		uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t25",
		bannerImg: "https://source.unsplash.com/1600x900/?technology",
		profileImage:
			"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
		name: "Nilesh Yadav",
		username: "NileshYadav",
		email: "ashleyporter@email.com",
		number: "+911234567890",
		title: "Code Storming 💻",
		bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, voluptas! Consequuntur quis ullam accusantium.",
		location: "New York, NY, USA",
		learningHours: "500",
		socials: {
			twitter: "http://twitter.com",
			instagram: "https://instagram.com",
			linkedin: "https://linkedin.com",
			facebook: "https://facebook.com",
			github: "https://github.com",
			web: "https://letsupgrade.in",
		},
		role: "student",
		handRaiseStatus: null,
		lastDoubtId: null,
		permissions: { chat: { isBanned: false, time: 0 } },
	},
	{
		uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t26",
		bannerImg: "https://source.unsplash.com/1600x900/?technology",
		profileImage:
			"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
		name: "Sandesh Yewale",
		username: "SandeshYewale",
		email: "ashleyporter@email.com",
		number: "+911234567890",
		title: "Code Storming 💻",
		bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, voluptas! Consequuntur quis ullam accusantium.",
		location: "New York, NY, USA",
		learningHours: "500",
		socials: {
			twitter: "http://twitter.com",
			instagram: "https://instagram.com",
			linkedin: "https://linkedin.com",
			facebook: "https://facebook.com",
			github: "https://github.com",
			web: "https://letsupgrade.in",
		},
		role: "student",
		handRaiseStatus: null,
		lastDoubtId: null,
		permissions: { chat: { isBanned: false, time: 0 } },
	},
	{
		uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t27",
		bannerImg: "https://source.unsplash.com/1600x900/?technology",
		profileImage:
			"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
		name: "Mahesh Nanekar",
		username: "MaheshNanekar",
		email: "ashleyporter@email.com",
		number: "+911234567890",
		title: "Code Storming 💻",
		bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, voluptas! Consequuntur quis ullam accusantium.",
		location: "New York, NY, USA",
		learningHours: "500",
		socials: {
			twitter: "http://twitter.com",
			instagram: "https://instagram.com",
			linkedin: "https://linkedin.com",
			facebook: "https://facebook.com",
			github: "https://github.com",
			web: "https://letsupgrade.in",
		},
		role: "student",
		handRaiseStatus: null,
		lastDoubtId: null,
		permissions: { chat: { isBanned: false, time: 0 } },
	},
	{
		uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t28",
		bannerImg: "https://source.unsplash.com/1600x900/?technology",
		profileImage:
			"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
		name: "Shoieb Shaikh",
		username: "ShoiebShaikh",
		email: "ashleyporter@email.com",
		number: "+911234567890",
		title: "Code Storming 💻",
		bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, voluptas! Consequuntur quis ullam accusantium.",
		location: "New York, NY, USA",
		learningHours: "500",
		socials: {
			twitter: "http://twitter.com",
			instagram: "https://instagram.com",
			linkedin: "https://linkedin.com",
			facebook: "https://facebook.com",
			github: "https://github.com",
			web: "https://letsupgrade.in",
		},
		role: "student",
		handRaiseStatus: null,
		lastDoubtId: null,
		permissions: { chat: { isBanned: false, time: 0 } },
	},
	{
		uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t29",
		bannerImg: "https://source.unsplash.com/1600x900/?technology",
		profileImage:
			"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
		name: "Tanishq Jagwani",
		username: "TanishqJagwani",
		email: "ashleyporter@email.com",
		number: "+911234567890",
		title: "Code Storming 💻",
		bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, voluptas! Consequuntur quis ullam accusantium.",
		location: "New York, NY, USA",
		learningHours: "500",
		socials: {
			twitter: "http://twitter.com",
			instagram: "https://instagram.com",
			linkedin: "https://linkedin.com",
			facebook: "https://facebook.com",
			github: "https://github.com",
			web: "https://letsupgrade.in",
		},
		role: "student",
		handRaiseStatus: null,
		lastDoubtId: null,
		permissions: { chat: { isBanned: false, time: 0 } },
	},
	{
		uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t210",
		bannerImg: "https://source.unsplash.com/1600x900/?technology",
		profileImage:
			"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
		name: "Aquib Shaikh",
		username: "AquibShaikh",
		email: "ashleyporter@email.com",
		number: "+911234567890",
		title: "Code Storming 💻",
		bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, voluptas! Consequuntur quis ullam accusantium.",
		location: "New York, NY, USA",
		learningHours: "500",
		socials: {
			twitter: "http://twitter.com",
			instagram: "https://instagram.com",
			linkedin: "https://linkedin.com",
			facebook: "https://facebook.com",
			github: "https://github.com",
			web: "https://letsupgrade.in",
		},
		role: "student",
		handRaiseStatus: null,
		lastDoubtId: null,
		permissions: { chat: { isBanned: false, time: 0 } },
	},
	{
		uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t211",
		bannerImg: "https://source.unsplash.com/1600x900/?technology",
		profileImage:
			"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
		name: "Asha Karande",
		username: "AshaKarande",
		email: "ashleyporter@email.com",
		number: "+911234567890",
		title: "Code Storming 💻",
		bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, voluptas! Consequuntur quis ullam accusantium.",
		location: "New York, NY, USA",
		learningHours: "500",
		socials: {
			twitter: "http://twitter.com",
			instagram: "https://instagram.com",
			linkedin: "https://linkedin.com",
			facebook: "https://facebook.com",
			github: "https://github.com",
			web: "https://letsupgrade.in",
		},
		role: "student",
		handRaiseStatus: null,
		lastDoubtId: null,
		permissions: { chat: { isBanned: false, time: 0 } },
	},
];

const Users = () => {
	const [search, setSearch] = useState("");
	const { overlapVisible, OverlapComponent, overlapProps, overlapName } =
		useSidebarStore((store) => ({
			overlapVisible: store.overlapSection.visible,
			OverlapComponent: store.overlapSection.Component,
			overlapProps: store.overlapSection.props,
			overlapName: store.overlapSection.name,
		}));

	return (
		<>
			<div className="flex w-full flex-col bg-neutral-50 text-slate-900 h-screen-ios dark:bg-neutral-900 dark:text-slate-200 h-navScreen divide-y divide-neutral-200 dark:divide-neutral-700">
				{/* <Transition
					as={Fragment}
					show={overlapVisible}
					enter="transition ease-in-out duration-500 transform"
					enterFrom="translate-x-full"
					enterTo="translate-x-0"
					leave="transition ease-in-out duration-500 transform"
					leaveFrom="translate-x-0"
					leaveTo="translate-x-full"
				> */}
				{/* <OverlapComponent {...overlapProps} /> */}
				{/* </Transition> */}
				{overlapVisible && overlapName === "profile" ? (
					<OverlapComponent {...overlapProps} />
				) : participants.length ? (
					<>
						<Search
							setSearch={setSearch}
							className="h-14"
							placeholder="Search User"
						/>
						<ul className="h-full divide-y divide-neutral-200 overflow-y-scroll bg-neutral-50 text-slate-900 shadow scrollbar-hide dark:divide-neutral-800 dark:bg-neutral-900 dark:text-slate-200">
							{participants
								.filter((p) =>
									p.name
										?.toLowerCase()
										?.includes(search?.toLowerCase())
								)
								.sort((a, b) => {
									if (!a.participantId) return 1;
									if (!b.participantId) return -1;
									return 0;
								})
								.map((participant, idx) => (
									<li
										key={participant.uid + idx + 1}
										className="bg-neutral-50 text-slate-900 dark:bg-neutral-900 dark:text-slate-200"
									>
										<Participant
											participant={{
												...participant,
												position: idx + 1,
											}}
										/>
									</li>
								))}
						</ul>
					</>
				) : (
					<>
						<div className="flex h-full select-none flex-col items-center justify-center space-x-1 space-y-8 text-black">
							{/* <img
								src="/assets/img/noParticipants.png"
								alt="No Participant's Yet"
								className="w-[25%] md:w-[60%]"
							/> */}
							<p className="text-slate-500">
								No Users Found
							</p>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default Users;
