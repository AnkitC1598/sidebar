import { useState } from "react";
import { Search } from "../../../submodules/shared/components/atoms";
import { Participant } from "../../molecules";

const Participants = ({ participants }) => {
	const [search, setSearch] = useState("");

	return (
		<>
			<div className="flex w-full flex-col bg-neutral-50 text-slate-900 h-screen-ios dark:bg-neutral-900 dark:text-slate-200 md:h-navScreen">
				{Object.prototype.toString.call(participants) ===
					"[object Array]" && participants.length ? (
					<>
						<Search
							setSearch={setSearch}
							className="border-b border-neutral-200 dark:border-neutral-700 p-4"
						/>
						<ul className="h-full divide-y divide-neutral-200 overflow-y-scroll bg-neutral-50 text-slate-900 shadow scrollbar-hide dark:divide-neutral-800 dark:bg-neutral-900 dark:text-slate-200">
							{participants
								.filter((p) =>
									p.name
										?.toLowerCase()
										?.includes(search?.toLowerCase())
								)
								.sort((a, b) => {
									if (!a.participantId) return 1;
									if (!b.participantId) return -1;
									return 0;
								})
								.map((participant) => (
									<li
										key={participant.uid}
										className="bg-neutral-50 text-slate-900 dark:bg-neutral-900 dark:text-slate-200"
									>
										<Participant
											participant={participant}
										/>
									</li>
								))}
						</ul>
					</>
				) : (
					<>
						<div className="flex h-full select-none flex-col items-center justify-center space-x-1 space-y-8 text-black">
							<img
								src="/assets/img/noParticipants.png"
								alt="No Participant's Yet"
								className="w-[25%] md:w-[60%]"
							/>
							<p className="text-slate-500">
								No Participant's Yet
							</p>
						</div>
					</>
				)}
			</div>
		</>
	);
};

Participants.defaultProps = {
	participants: [],
};

export default Participants;
