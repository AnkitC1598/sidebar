import React from "react";
import { Input, Tag } from "../../../submodules/shared/components/atoms";
import { ArrowDown, ArrowUp } from "../../../submodules/shared/icons";
import { formatDate } from "../../../submodules/shared/utils";

const doubt = {
	doubt: {
		id: 1,
		question: "Programmatically navigate using React router",
		tags: ["html", "web-dev"],
		author: {
			name: "Ashley Porter",
			username: "ashleyporter",
		},
		createdAt: "2022-09-30T06:14:46.508Z",
		solved: true,
	},
	answers: [
		{
			user: {
				name: "Ashley Porter",
				username: "ashleyporter",
				profileImage:
					"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
			},
			createdAt: "2022-09-30T06:14:46.508Z",
			answer: "There is a new useHistory hook in React Router >5.1.0 if you are using React >16.8.0 and functional components.",
			replyCount: 1,
			upVote: true,
			downVote: false,
			votes: 10,
		},
		{
			user: {
				name: "Ashley Porter",
				username: "ashleyporter",
				profileImage:
					"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
			},
			createdAt: "2022-09-30T06:14:46.508Z",
			answer: "TL;DR: You can use the new useNavigate hook.",
			replyCount: 2,
			upVote: false,
			downVote: false,
			votes: 10,
		},
		{
			user: {
				name: "Ashley Porter",
				username: "ashleyporter",
				profileImage:
					"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
			},
			createdAt: "2022-09-30T06:14:46.508Z",
			answer: "React-Router v2 For the most recent release (v2.0.0-rc5), the recommended navigation method is by directly pushing onto the history singleton. You can see that in action in the Navigating outside of Components doc.",
			replyCount: 3,
			upVote: false,
			downVote: true,
			votes: 10,
		},
		{
			user: {
				name: "Ashley Porter",
				username: "ashleyporter",
				profileImage:
					"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
			},
			createdAt: "2022-09-30T06:14:46.508Z",
			answer: "Here's how you do this with react-router v2.0.0 with ES6. react-router has moved away from mixins.",
			replyCount: 4,
			upVote: false,
			downVote: false,
			votes: 10,
		},
	],
};

const Doubt = ({ doubtId, solved }) => {
	return (
		<>
			<div className="flex w-full flex-col h-navScreen h-screen-ios scrollbar-hide space-y-2 p-2 pb-0 overflow-hidden bg-slate-100 dark:bg-neutral-900">
				<div className="p-4 bg-neutral-200 dark:bg-neutral-700 rounded-md space-y-2">
					<div className="line-clamp-2 text-sm text-slate-900 dark:text-slate-200">
						{doubt.doubt.question}
					</div>
					<div className="flex flex-col space-y-1">
						<div className="flex items-center space-x-1 text-xxs text-slate-500">
							<span>asked by</span>
							<span>@{doubt.doubt.author.username}</span>
							<span>at</span>
							<span>
								{formatDate(doubt.doubt.createdAt).chat}
							</span>
						</div>
						<div className="flex items-center space-x-2">
							{doubt.doubt.tags.map((tag) => (
								<Tag key={tag} tag={tag} />
							))}
							<span className="flex-1 flex justify-end text-slate-50">
								{doubt.doubt.solved ? (
									<span className="text-xxs px-4 py-1 bg-green-500 rounded-full text-slate-50">
										Solved
									</span>
								) : null}
							</span>
						</div>
					</div>
				</div>
				<div className="px-4 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-md space-y-2">
					Answers
				</div>
				<div className="px-2 flex-1 bg-neutral-50 dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-800 overflow-y-scroll scrollbar-hide">
					{doubt.answers.map((answer, idx) => (
						<div
							key={answer.user.username + idx}
							className="group py-2 flex flex-col space-y-1"
						>
							<div className="flex items-center space-x-4">
								<img
									src={answer.user.profileImage}
									alt="profile"
									className="w-8 h-8 rounded-full"
								/>
								<div className="text-xs line-clamp-3">
									{answer.answer}
								</div>
							</div>
							<div className="flex items-center space-x-4">
								<span className="w-8 h-8 flex space-x-2 items-center">
									{/* <div className="flex flex-col space-y-2">
										<ArrowUp
											className="text-green-500"
											filled={answer.upVote}
										/>
										<ArrowDown
											className="text-red-500"
											filled={answer.downVote}
										/>
									</div>
									<span className='text-xxs'>{answer.votes}</span> */}
								</span>
								<ArrowUp
									className="text-green-500"
									filled={answer.upVote}
								/>
								<ArrowDown
									className="text-red-500"
									filled={answer.downVote}
								/>
								{/* <button className="px-4 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-xxs">
									Reply ({answer.replyCount})
								</button> */}
								{solved ? null : (
									<button className="px-4 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-800 text-xxs">
										Mark Solved
									</button>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
			{solved ? null : (
				<div className="border-t border-neutral-200 p-2 dark:border-neutral-800">
					<Input placeholder="Your Answer" />
				</div>
			)}
		</>
	);
};

export default Doubt;
