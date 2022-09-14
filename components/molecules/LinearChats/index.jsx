import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import { Input } from "../../../submodules/shared/components/atoms";
import { classNames, urlify } from "../../../submodules/shared/utils";
import { LinearChat } from "../../atoms";

const LinearChats = ({ messages }) => {
	return (
		<>
			{Object.prototype.toString.call(messages) === "[object Array]" &&
			messages.length ? (
				<>
					<ul className="flex h-full w-full flex-col divide-y divide-neutral-200 overflow-hidden overflow-y-scroll rounded-md pt-0.5 scrollbar-hide dark:divide-neutral-800">
						{messages.map((msgGroup, idx) => (
							<li
								key={msgGroup?.user?.uid + msgGroup.type + idx}
								className="group flex space-x-2 break-all p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800"
							>
								<LinearChat msgGroup={msgGroup} />
							</li>
						))}
					</ul>
					<div className="border-t border-neutral-200 px-3 py-3 dark:border-neutral-800">
						<Input placeholder="Send Message" />
					</div>
				</>
			) : (
				<>
					<div className="flex h-full select-none flex-col items-center justify-center space-x-1 space-y-8 text-black">
						<img
							src="/assets/img/noMessage.png"
							alt="No Agenda's Listed"
							className="w-[25%] md:w-[60%]"
						/>
						<div className="text-slate-500">
							No Resource's Listed
						</div>
					</div>
				</>
			)}
		</>
	);
};

LinearChats.defaultProps = {
	messages: [],
};

export default LinearChats;
