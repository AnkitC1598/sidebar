import { classNames } from "../../../submodules/shared/utils";

const Topic = ({ agenda }) => {
	const markComplete = () => console.log("markComplete");
	return (
		<>
			<li
				className="flex items-center justify-between bg-neutral-50 dark:bg-neutral-900"
				onClick={markComplete}
			>
				<span className="flex flex-1 space-x-4 py-4">
					<div
						className={classNames(
							"flex-1 text-sm pl-4",
							agenda.isCompleted
								? "text-slate-500 dark:text-slate-400"
								: " text-slate-900 dark:text-slate-200"
						)}
					>
						{agenda.text}
					</div>
					<div className="flex items-center pr-12">
						<input
							type="checkbox"
							className="h-4 w-4 rounded border-neutral-300 text-lu-500 focus:outline-none focus:ring-0 focus:ring-offset-0 dark:border-neutral-800"
							checked={agenda.isCompleted}
						/>
					</div>
				</span>
			</li>
		</>
	);
};

export default Topic;
