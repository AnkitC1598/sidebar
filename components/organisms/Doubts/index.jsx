import { Popover, Transition } from "@headlessui/react";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { Fragment, useState } from "react";
import { useSidebarStore } from "../../../store/store";
import { Button, Search } from "../../../submodules/shared/components/atoms";
import { classNames } from "../../../submodules/shared/utils";
import { DoubtPreview } from "../../atoms";

const doubts = [
	{
		id: 1,
		question: "Programmatically navigate using React router",
		tags: ["reactjs", "react-router"],
		author: {
			name: "Ashley Porter",
			username: "ashleyporter",
		},
		createdAt: "2022-09-30T06:14:46.508Z",
		solved: true,
	},
	{
		id: 2,
		question: "Loop inside React JSX",
		tags: ["javascript", "reactjs", "jsx"],
		author: {
			name: "Ashley Porter",
			username: "ashleyporter",
		},
		createdAt: "2022-09-30T06:14:46.508Z",
		solved: false,
	},
	{
		id: 3,
		question: "What are these three dots in React doing?",
		tags: ["javascript", "reactjs", "spread-syntax"],
		author: {
			name: "Ashley Porter",
			username: "ashleyporter",
		},
		createdAt: "2022-09-30T06:14:46.508Z",
		solved: true,
	},
	{
		id: 4,
		question: "What is the difference between state and props in React?",
		tags: [
			"javascript",
			"reactjs",
			"state",
			"props",
			"reactjs",
			"state",
			"props",
		],
		author: {
			name: "Ashley Porter",
			username: "ashleyporter",
		},
		createdAt: "2022-09-30T06:14:46.508Z",
		solved: true,
	},
	{
		id: 4,
		question: "What is the difference between state and props in React?",
		tags: [
			"javascript",
			"reactjs",
			"state",
			"props",
			"reactjs",
			"state",
			"props",
		],
		author: {
			name: "Ashley Porter",
			username: "ashleyporter",
		},
		createdAt: "2022-09-30T06:14:46.508Z",
		solved: true,
	},
	{
		id: 4,
		question: "What is the difference between state and props in React?",
		tags: [
			"javascript",
			"reactjs",
			"state",
			"props",
			"reactjs",
			"state",
			"props",
		],
		author: {
			name: "Ashley Porter",
			username: "ashleyporter",
		},
		createdAt: "2022-09-30T06:14:46.508Z",
		solved: true,
	},
	{
		id: 4,
		question: "What is the difference between state and props in React?",
		tags: [
			"javascript",
			"reactjs",
			"state",
			"props",
			"reactjs",
			"state",
			"props",
		],
		author: {
			name: "Ashley Porter",
			username: "ashleyporter",
		},
		createdAt: "2022-09-30T06:14:46.508Z",
		solved: true,
	},
];

const Doubts = () => {
	const [search, setSearch] = useState("");
	const {
		overlapVisible,
		OverlapComponent,
		overlapProps,
		overlapName,
		dispatchToSidebar,
	} = useSidebarStore((store) => ({
		overlapVisible: store.overlapSection.visible,
		OverlapComponent: store.overlapSection.Component,
		overlapProps: store.overlapSection.props,
		overlapName: store.overlapSection.name,
		dispatchToSidebar: store.dispatchToSidebar,
	}));

	const submitDoubt = () =>
		dispatchToSidebar({
			type: "SET_OVERLAP_SECTION",
			payload: {
				component: "doubtView",
				title: "Back to Doubts",
			},
		});

	return (
		<>
			<>
				<div className="flex w-full flex-col bg-neutral-50 text-slate-900 h-screen-ios dark:bg-neutral-900 dark:text-slate-200 h-navScreen divide-y divide-neutral-200 dark:divide-neutral-700">
					{overlapVisible &&
					["doubtView", "profile"].includes(overlapName) ? (
						<OverlapComponent {...overlapProps} />
					) : doubts.length ? (
						<>
							<Search
								setSearch={setSearch}
								className="h-14"
								placeholder="Search Doubt"
							/>
							<ul className="h-full divide-y divide-neutral-200 overflow-y-scroll bg-neutral-50 text-slate-900 shadow scrollbar-hide dark:divide-neutral-800 dark:bg-neutral-900 dark:text-slate-200">
								{doubts
									.filter((p) =>
										p.question
											?.toLowerCase()
											?.includes(search?.toLowerCase())
									)
									.map((doubt, idx) => (
										<li
											key={doubt.id + idx + 1}
											className="bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 cursor-pointer"
										>
											<DoubtPreview doubt={doubt} />
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
				{overlapVisible ? null : (
					<Popover>
						{({ open }) => (
							<div
								className={classNames(
									open
										? "fixed inset-0 w-full inline-block border-none"
										: "absolute bottom-0 right-0 w-full"
								)}
							>
								{open ? (
									<div className="fixed inset-0 bg-black bg-opacity-75" />
								) : null}
								<Popover.Button className="absolute bottom-4 right-4 rounded-md ml-auto flex items-center justify-center p-2 bg-neutral-200 dark:bg-neutral-800 transition">
									{open ? (
										<XMarkIcon className="h-8 w-8 dark:text-slate-200 text-slate-900" />
									) : (
										<PlusIcon className="h-8 w-8 dark:text-slate-200 text-slate-900" />
									)}
								</Popover.Button>
								<Transition
									as={Fragment}
									enter="transition ease-out duration-200"
									enterFrom="opacity-0 translate-y-1"
									enterTo="opacity-100 translate-y-0"
									leave="transition ease-in duration-150"
									leaveFrom="opacity-100 translate-y-0"
									leaveTo="opacity-0 translate-y-1"
								>
									<Popover.Panel className="absolute bottom-20 right-0 z-10 mt-3 w-5/6 transform px-4 sm:px-0 lg:max-w-3xl">
										<div className="overflow-hidden flex flex-col space-y-3">
											<div className="flex space-x-3 rounded-md bg-neutral-50 border border-neutral-200 dark:border-neutral-800 px-2 py-4">
												<img
													src="https://lucdn.letsupgrade.net/doubt_T_and_CG_0dba2e33f2.png"
													alt="Doubts T&CG"
													className="w-14 h-12"
												/>
												<div className="flex flex-col">
													<div className="text-sm font-medium">
														Tips & Community
														Guidelines
													</div>
													<ul className="list-disc text-xxs !ml-4 text-slate-500">
														<li>
															Make sure the
															question is not
															repeated.
														</li>
														<li>
															When drafting,
															summarize the
															problem.
														</li>
														<li>
															When appropriate,
															describe what you’ve
															tried.
														</li>
													</ul>
												</div>
											</div>
											<div className="flex flex-col space-y-2 rounded-md bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 p-4 text-slate-900 dark:text-slate-200">
												<div className="font-semibold">
													Ask a Doubt
												</div>
												<div className="text-xxs">
													Be specific and imagine
													you’re asking a question to
													another person
												</div>
												<textarea
													name="question"
													id="question"
													cols="30"
													rows="5"
													className="rounded-md text-xs placeholder:text-slate-500 text-slate-900"
													placeholder="Start typing your doubt here..."
												/>
												<div className="text-xxs !mt-4">
													Add up to 3 tags from the
													pool to describe what your
													question is about
												</div>
												<input
													type="text"
													className="rounded-md text-xs placeholder:text-slate-500 text-slate-900"
													placeholder="eg. web css html"
												/>
												<Button
													label="Post Doubt"
													className="w-max ml-auto text-xs !mt-4"
													bgColor="bg-purple-800 enabled:hover:bg-purple-600 dark:bg-purple-500 dark:enabled:hover:bg-purple-200"
													textColor="text-slate-100"
													action={submitDoubt}
												/>
											</div>
										</div>
									</Popover.Panel>
								</Transition>
							</div>
						)}
					</Popover>
				)}
			</>
		</>
	);
};

export default Doubts;
