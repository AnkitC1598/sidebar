import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useSidebarStore } from "../../../store/store";
import { Search } from "../../../submodules/shared/components/atoms";
import { Participant } from "../../molecules";

const Users = ({ participants }) => {
	const [search, setSearch] = useState("");
	const { overlapVisible, OverlapComponent, overlapProps } = useSidebarStore(
		(store) => ({
			overlapVisible: store.overlapVisible,
			OverlapComponent: store.OverlapComponent,
			overlapProps: store.overlapProps,
		})
	);

	return (
		<>
			<div className="flex w-full flex-col bg-neutral-50 text-slate-900 h-screen-ios dark:bg-neutral-900 dark:text-slate-200 h-navScreen divide-y divide-neutral-200 dark:divide-neutral-700">
				{/* <Transition
					as={Fragment}
					show={overlapVisible}
					enter="transition ease-in-out duration-500 transform"
					enterFrom="translate-x-full"
					enterTo="translate-x-0"
					leave="transition ease-in-out duration-500 transform"
					leaveFrom="translate-x-0"
					leaveTo="translate-x-full"
				> */}
				{/* <OverlapComponent {...overlapProps} /> */}
				{/* </Transition> */}
				{overlapVisible ? (
					<OverlapComponent {...overlapProps} />
				) : Object.prototype.toString.call(participants) ===
						"[object Array]" && participants.length ? (
					<>
						<Search
							setSearch={setSearch}
							className="h-14"
							placeholder="Search User"
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
								.map((participant, idx) => (
									<li
										key={participant.uid + idx + 1}
										className="bg-neutral-50 text-slate-900 dark:bg-neutral-900 dark:text-slate-200"
									>
										<Participant
											participant={{
												...participant,
												position: idx + 1,
											}}
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

Users.defaultProps = {
	participants: [],
};

export default Users;
