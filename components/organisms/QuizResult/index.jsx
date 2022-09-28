import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Participant } from "../../molecules";

const quizResult = {
	result: {
		total: 15,
		correct: 15,
		attempted: 20,
		incorrect: 5,
		timeTaken: "6:20 min",
		totalQuizTakers: 50,
	},
	members: [
		{
			uid: "aVNhQHe1N8ZibeFmGh5zK8eAh9t21",
			bannerImg: "https://source.unsplash.com/1600x900/?technology",
			profileImage:
				"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
			name: "Ashley Porter 1",
			username: "ashleyporter",
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
			name: "Ashley Porter 2",
			username: "ashleyporter",
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
			name: "Ashley Porter 3",
			username: "ashleyporter",
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
			name: "Ashley Porter 4",
			username: "ashleyporter",
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
			name: "Ashley Porter 5",
			username: "ashleyporter",
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
			name: "Ashley Porter 6",
			username: "ashleyporter",
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
			name: "Ashley Porter 7",
			username: "ashleyporter",
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
			name: "Ashley Porter 8",
			username: "ashleyporter",
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
			name: "Ashley Porter 9",
			username: "ashleyporter",
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
			name: "Ashley Porter 10",
			username: "ashleyporter",
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
			name: "Ashley Porter 11",
			username: "ashleyporter",
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
	],
};

const QuizResult = ({ quizId }) => {
	return (
		<>
			<div className="h-full flex flex-col">
				<div className="p-4 flex flex-col">
					<div className="font-medium">Your Test Score</div>
					<div className="flex items-center justify-center bg-neutral-200 dark:bg-neutral-800 rounded-md divide-x divide-neutral-300 dark:divide-neutral-700 py-2">
						<div className="flex flex-col items-center space-y-2 px-2">
							<div className="text-5xl text-center bg-neutral-300 dark:bg-neutral-700 rounded-md p-2">
								{quizResult.result.total}
							</div>
							<div className="text-sm">Total Score</div>
						</div>
						<div className="flex-1 grid grid-cols-2 grid-rows-2 items-center h-full">
							<span className="text-center">
								<div className="text-xl">
									{quizResult.result.correct}
								</div>
								<div className="text-xxs">Correct</div>
							</span>
							<span className="text-center">
								<div className="text-xl">
									{quizResult.result.attempted}
								</div>
								<div className="text-xxs">Attempted</div>
							</span>
							<span className="text-center">
								<div className="text-xl">
									{quizResult.result.attempted}
								</div>
								<div className="text-xxs">InCorrect</div>
							</span>
						</div>
						<div className="flex flex-col items-center space-y-2 px-2">
							<span className="text-center">
								<div className="text-xl">
									{quizResult.result.timeTaken}
								</div>
								<div className="text-xxs">Total Time Taken</div>
							</span>
							<span className="text-center">
								<div className="text-xl">
									{quizResult.result.totalQuizTakers}
								</div>
								<div className="text-xxs">
									Total Quiz Takers
								</div>
							</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col h-full overflow-y-scroll scrollbar-hide">
					<div className="font-medium px-4">Leaderboard</div>
					<div className="flex w-full flex-col h-full overflow-y-scroll scrollbar-hide">
						<div className="flex justify-between text-slate-500 px-4 py-2">
							<span className="text-sm">
								{quizResult.members.length} members
							</span>
							<MagnifyingGlassIcon className="h-4 w-4" />
						</div>
						<ul className="h-full divide-y divide-neutral-200 overflow-y-scroll scrollbar-hide bg-neutral-50 text-slate-900 shadow dark:divide-neutral-800 dark:bg-neutral-900 dark:text-slate-200 border-t border-neutral-200 dark:border-neutral-800">
							{quizResult.members.map((member, idx) => (
								<li
									key={member.uid + idx + 1}
									className="bg-neutral-50 text-slate-900 dark:bg-neutral-900 dark:text-slate-200"
								>
									<Participant
										participant={{
											...member,
											position: idx + 1,
										}}
										showOnline={false}
										canChat={false}
									/>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default QuizResult;
