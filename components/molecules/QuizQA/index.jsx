import React from "react";
import { classNames } from "../../../submodules/shared/utils";

const QuizQA = ({ index, qa, selectAnswer }) => {
	if (Object.prototype.toString.call(qa) !== "[object Object]")
		throw new Error("QuizQA: options must be an object");

	return (
		<>
			<div className="flex flex-1 flex-col space-y-8">
				<div className="flex flex-col">
					<span className="text-sm">
						Q. {String(index + 1).padStart(2, "0")}
					</span>
					<span>{qa.question}</span>
				</div>
				<div className="flex flex-col space-y-2">
					<span className="text-xs">
						Choose the right option below
					</span>
					<ul className="flex flex-col space-y-2">
						{qa.options.map((option, idx) => (
							<li
								key={option + idx}
								className={classNames(
									"p-4 flex space-x-4 rounded-md",
									qa.answer === option
										? "bg-neutral-400 dark:bg-neutral-800"
										: "bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-600 dark:hover:bg-neutral-700"
								)}
								onClick={() => selectAnswer(option)}
							>
								<span>{String.fromCharCode(65 + idx)}.</span>
								<span className="flex-1">{option}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default QuizQA;
