import { differenceInDays } from "date-fns";
import React, { useMemo } from "react";
import { useSidebarStore } from "../../../store/store";
import { Options, Role } from "../../../submodules/shared/components/atoms";
import { classNames } from "../../../submodules/shared/utils";

const getStatusColor = (status) => {
	switch (status) {
		case "online":
			return "bg-green-500";
		case "offline":
			return "bg-gray-500";
		default:
			return "bg-gray-500";
	}
};

const QuizPreview = ({ quiz }) => {
	if (Object.prototype.toString.call(quiz) !== "[object Object]")
		throw new Error("QuizPreview: quiz is not an object");

	const dispatchToSidebar = useSidebarStore(
		(store) => store.dispatchToSidebar
	);

	const quizExpiringIn = useMemo(
		() => differenceInDays(new Date(quiz.expiryDate), new Date()),
		[quiz.expiryDate]
	);

	const openQuiz = () => console.log("Opening Quiz");
	// dispatchToSidebar({
	// 	type: "SET_OVERLAP_SECTION",
	// 	payload: {
	// 		component: "quizView",
	// 		title: `@${quiz.name}`,
	// 		props: {
	// 			user: quiz,
	// 		},
	// 	},
	// });

	return (
		<>
			<div className="flex w-full flex-1 items-center space-x-2 p-4 group">
				<img
					src={
						quiz.icon
							? quiz.icon
							: `https://avatars.dicebear.com/api/initials/${quiz.name}.svg`
					}
					alt={quiz.name}
					className="square h-10 rounded-md"
				/>
				<div className="min-w-0 flex-1 px-2">
					<div className="group-hover:w-2/3 w-full">
						<div className="group relative flex space-x-1">
							<span
								className="line-clamp-1 text-sm font-medium text-slate-900 dark:text-slate-200"
								onClick={openQuiz}
							>
								{quiz.name}
							</span>
						</div>
					</div>
				</div>
				<span
					className={classNames(
						"inline-flex items-center space-x-1 rounded px-2.5 py-0.5 text-xxs font-medium text-slate-900 dark:text-slate-200",
						quiz.completed
							? "bg-green-500"
							: quiz.attempted
							? "bg-orange-500"
							: quizExpiringIn <= 4
							? "bg-red-500"
							: "bg-transparent"
					)}
				>
					<span>
						{quiz.completed
							? "Completed"
							: quiz.attempted
							? "Attempted"
							: quizExpiringIn <= 4
							? `Expires in ${quizExpiringIn} days`
							: ""}
					</span>
				</span>
			</div>
		</>
	);
};

export default QuizPreview;
