import { useState } from "react";
import { useSidebarStore } from "../../../store/store";
import { Search } from "../../../submodules/shared/components/atoms";
import { QuizPreview } from "../../atoms";

const quizes = [
	{
		id: "aVNhQHe1N8ZibeFmGh5zK8eAh9t21",
		name: "Quiz 1",
		completed: true,
		attempted: false,
		quizStartDate: "2022-09-20T12:14:51.570Z",
		expiryDate: "2022-09-25T12:14:51.570Z",
	},
	{
		id: "aVNhQHe1N8ZibeFmGh5zK8eAh9t21",
		name: "Quiz 2",
		completed: false,
		attempted: true,
		quizStartDate: "2022-09-20T12:14:51.570Z",
		expiryDate: "2022-09-25T12:14:51.570Z",
	},
	{
		id: "aVNhQHe1N8ZibeFmGh5zK8eAh9t21",
		name: "Quiz 3",
		completed: false,
		attempted: false,
		quizStartDate: "2022-09-20T12:14:51.570Z",
		expiryDate: "2022-09-22T14:14:51.570Z",
	},
	{
		id: "aVNhQHe1N8ZibeFmGh5zK8eAh9t21",
		name: "Quiz 4",
		completed: false,
		attempted: false,
		quizStartDate: "2022-09-20T12:14:51.570Z",
		expiryDate: "2022-10-26T12:14:51.570Z",
	},
];

const Quiz = () => {
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
				{overlapVisible &&
				["quizView", "quizResult", "profile"].includes(overlapName) ? (
					<OverlapComponent {...overlapProps} />
				) : quizes.length ? (
					<>
						<Search
							setSearch={setSearch}
							className="h-14"
							placeholder="Search Quiz"
						/>
						<ul className="h-full divide-y divide-neutral-200 overflow-y-scroll bg-neutral-50 text-slate-900 shadow scrollbar-hide dark:divide-neutral-800 dark:bg-neutral-900 dark:text-slate-200">
							{quizes
								.filter((p) =>
									p.name
										?.toLowerCase()
										?.includes(search?.toLowerCase())
								)
								.map((quiz, idx) => (
									<li
										key={quiz.id + idx + 1}
										className="bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 cursor-pointer"
									>
										<QuizPreview quiz={quiz} />
									</li>
								))}
						</ul>
					</>
				) : (
					<>
						<div className="flex h-full select-none flex-col items-center justify-center space-x-1 space-y-8 text-black">
							<img
								src="/assets/img/noQuizs.png"
								alt="No Quiz's Yet"
								className="w-[25%] md:w-[60%]"
							/>
							<p className="text-slate-500">No Quiz's Yet</p>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default Quiz;
