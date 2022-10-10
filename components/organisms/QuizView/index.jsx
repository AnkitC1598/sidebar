import {
	ArrowLeftIcon,
	ArrowRightIcon,
	CheckCircleIcon,
} from "@heroicons/react/24/solid";
import produce from "immer";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSidebarStore } from "../../../store/store";
import { Button } from "../../../submodules/shared/components/atoms";
import { Modal } from "../../../submodules/shared/components/organisms";
import { classNames } from "../../../submodules/shared/utils";
import { QuizQA } from "../../molecules";
import ReactCanvasConfetti from "react-canvas-confetti";

const quiz = {
	id: "aVNhQHe1N8ZibeFmGh5zK8eAh9t21",
	icon: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
	name: "Quiz 1",
	completed: true,
	attempted: false,
	quizStartDate: "2022-09-20T12:14:51.570Z",
	expiryDate: "2022-09-25T12:14:51.570Z",
};

const questionList = [
	{ question: "A", options: ["A", "B", "C", "D"], answer: null },
	{ question: "B", options: ["A", "B", "C", "D"], answer: null },
	{ question: "C", options: ["A", "B", "C", "D"], answer: null },
	{ question: "D", options: ["A", "B", "C", "D"], answer: null },
	{ question: "E", options: ["A", "B", "C", "D"], answer: null },
	{ question: "F", options: ["A", "B", "C", "D"], answer: null },
	{ question: "G", options: ["A", "B", "C", "D"], answer: null },
];

const QuizView = ({ quizId }) => {
	const dispatchToSidebar = useSidebarStore(
		(store) => store.dispatchToSidebar
	);
	const [questions, setQuestions] = useState(questionList);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [isSubmitSuccessOpen, setIsSubmitSuccessOpen] = useState(false);
	const confettiAnimationInstance = useRef();

	const getConfettiAnimationInstance = useCallback((instance) => {
		confettiAnimationInstance.current = instance;
	}, []);

	const makeShot = useCallback((particleRatio, opts) => {
		confettiAnimationInstance.current &&
			confettiAnimationInstance.current({
				...opts,
				origin: { y: 0.7 },
				particleCount: Math.floor(200 * particleRatio),
			});
	}, []);

	const fireConfetti = useCallback(() => {
		makeShot(0.25, {
			spread: 26,
			startVelocity: 55,
		});

		makeShot(0.2, {
			spread: 60,
		});

		makeShot(0.35, {
			spread: 100,
			decay: 0.91,
			scalar: 0.8,
		});

		makeShot(0.1, {
			spread: 120,
			startVelocity: 25,
			decay: 0.92,
			scalar: 1.2,
		});

		makeShot(0.1, {
			spread: 120,
			startVelocity: 45,
		});
	}, [makeShot]);

	const openSubmitSuccess = () => setIsSubmitSuccessOpen(true);
	const closeSubmitSuccess = () => setIsSubmitSuccessOpen(false);

	const nextQuestion = () => {
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex((prev) =>
				produce(prev, (draft) => draft + 1)
			);
		}
	};
	const prevQuestion = () => {
		if (currentQuestionIndex > 0)
			setCurrentQuestionIndex((prev) =>
				produce(prev, (draft) => draft - 1)
			);
	};

	const selectAnswer = (option) => {
		setQuestions((prev) =>
			produce(prev, (draft) => {
				draft[currentQuestionIndex].answer = option;
			})
		);
	};

	const submit = () => {
		console.log("submit", questions);
		fireConfetti();
		openSubmitSuccess();
	};

	const showResult = () => {
		closeSubmitSuccess();
		dispatchToSidebar({
			type: "SET_OVERLAP_SECTION",
			payload: {
				component: "quizResult",
				title: `${quiz.name} Results`,
				props: {
					quizId: quiz.id,
				},
			},
		});
	};

	useEffect(() => (window.fire = fireConfetti), []);

	return (
		<>
			<div className="relative px-4 h-full flex flex-col divide-y divide-neutral-200 dark:divide-neutral-800">
				<div className="flex items-center py-2">
					<div className="flex-1 text-center text-2xl font-semibold">
						{quiz.name}
					</div>
					<div className="p-2 flex flex-col text-slate-200 font-semibold bg-red-500 rounded-md">
						<div className="text-xxs">Time Remaining</div>
						<div className="">2:30 mins</div>
					</div>
				</div>
				<div className="h-full py-4 flex flex-col">
					<QuizQA
						qa={questions[currentQuestionIndex]}
						index={currentQuestionIndex}
						selectAnswer={selectAnswer}
					/>
					<div className="flex items-center justify-between">
						<div
							className={classNames(
								"flex flex-col space-y-1 items-center",
								currentQuestionIndex > 0
									? "cursor-pointer"
									: "cursor-not-allowed opacity-50"
							)}
							onClick={
								currentQuestionIndex > 0 ? prevQuestion : null
							}
						>
							<div
								className={classNames(
									"flex aspect-square p-3 flex-col items-center justify-center rounded-md text-sm focus-visible:outline-0 bg-transparent text-slate-900 dark:text-slate-100",
									currentQuestionIndex > 0
										? "hover:bg-neutral-200 dark:hover:bg-neutral-800"
										: ""
								)}
							>
								<ArrowLeftIcon className="w-5 h-5" />
							</div>
							<span className="text-xs">Prev</span>
						</div>
						{currentQuestionIndex === questions.length - 1 ? (
							<Button
								label="Submit"
								className="w-32"
								action={submit}
							/>
						) : (
							<span className="space-x-1 text-sm">
								<span>{currentQuestionIndex + 1}</span>
								<span>of</span>
								<span>{questions.length}</span>
							</span>
						)}
						<div
							className={classNames(
								"flex flex-col space-y-1 items-center",
								currentQuestionIndex < questions.length - 1
									? "cursor-pointer"
									: "cursor-not-allowed opacity-50"
							)}
							onClick={
								currentQuestionIndex < questions.length - 1
									? nextQuestion
									: null
							}
						>
							<div
								className={classNames(
									"flex aspect-square p-3 flex-col items-center justify-center rounded-md text-sm focus-visible:outline-0 bg-transparent text-slate-900 dark:text-slate-100",
									currentQuestionIndex < questions.length - 1
										? "hover:bg-neutral-200 dark:hover:bg-neutral-800"
										: ""
								)}
							>
								<ArrowRightIcon className="w-5 h-5" />
							</div>
							<span className="text-xs">Next</span>
						</div>
					</div>
				</div>
				<ReactCanvasConfetti
					refConfetti={getConfettiAnimationInstance}
					style={{
						position: "absolute",
						pointerEvents: "none",
						width: "100%",
						height: "125%",
						top: 0,
						right: 0,
					}}
				/>
			</div>
			<Modal
				className="p-6"
				customHandler={{
					isOpen: isSubmitSuccessOpen,
					close: showResult,
				}}
			>
				<div className="mt-2 flex flex-col items-center text-slate-900 dark:text-slate-200">
					<div className="text-xl mb-4">{quiz.name}</div>
					<CheckCircleIcon className="h-24 text-green-500" />
					<div className="text-lg">Completed</div>
					<div className="text-sm">
						{questions.length} out of {questions.length} questions
						submitted successfully
					</div>
				</div>
				<div className="mt-4 flex justify-center text-sm text-slate-900 dark:text-slate-200">
					<div
						className="underline underline-offset-2 cursor-pointer"
						onClick={showResult}
					>
						Check {quiz.name} Leaderboard
					</div>
				</div>
			</Modal>
		</>
	);
};

export default QuizView;
