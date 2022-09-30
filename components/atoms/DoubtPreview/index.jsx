import React from "react";
import { useSidebarStore } from "../../../store/store";
import { Tag } from "../../../submodules/shared/components/atoms";
import { formatDate } from "../../../submodules/shared/utils";

const DoubtPreview = ({ doubt }) => {
	if (Object.prototype.toString.call(doubt) !== "[object Object]")
		throw new Error("DoubtPreview: doubt is not an object");

	const dispatchToSidebar = useSidebarStore(
		(store) => store.dispatchToSidebar
	);

	const openDoubt = () =>
		dispatchToSidebar({
			type: "SET_OVERLAP_SECTION",
			payload: {
				component: "doubtView",
				title: "Back to Doubts",
				props: {
					doubtId: doubt.id,
					solved: doubt.solved,
				},
			},
		});

	return (
		<>
			<div
				className="flex flex-col space-y-1 w-full flex-1 p-4 group cursor-pointer"
				onClick={openDoubt}
			>
				<div className="line-clamp-2 text-sm text-slate-900 dark:text-slate-200">
					{doubt.question}
				</div>
				<div className="flex items-center space-x-1 text-xxs text-slate-500">
					<span>asked by</span>
					<span className="hover:underline underline-offset-2">
						@{doubt.author.username}
					</span>
					<span>at</span>
					<span>{formatDate(doubt.createdAt).chat}</span>
				</div>
				<div className="flex space-x-2">
					<div className="flex flex-wrap items-center gap-1">
						{doubt.tags.map((tag, idx) => (
							<Tag
								key={tag + idx}
								tag={tag}
								rounded="rounded-full"
							/>
						))}
					</div>
					<span className="flex-1 flex justify-end text-slate-50">
						{doubt.solved ? (
							<span className="text-xxs px-4 py-1 h-max bg-green-500 rounded-full text-slate-50">
								Solved
							</span>
						) : null}
					</span>
				</div>
			</div>
		</>
	);
};

export default DoubtPreview;
