import { Input } from "../../../submodules/shared/components/atoms";
import { Agenda } from "../../molecules";

const agendas = [
	{ id: "FMDDa_f-fiww8YAh", text: "For Loop", isCompleted: false },
	{ id: "UrFaOcRk7p_285-L", text: "For in Loop", isCompleted: true },
	{ id: "wdMhkhqlLokPQ6b_", text: "For of Loops", isCompleted: false },
	{ id: "T4YWUt6QHEttf22k", text: "Do While Loop", isCompleted: false },
	{ id: "mAFbN446ez13RofL", text: "While Loops", isCompleted: false },
];

const Agendas = () => {
	return (
		<>
			<div className="flex w-full flex-col bg-neutral-50 text-slate-900 h-screen-ios dark:bg-neutral-900 dark:text-slate-200 md:h-navScreen">
				{agendas.length ? (
					<>
						<span className="border-b border-neutral-200 px-3 py-3 dark:border-neutral-800">
							<Input placeholder="Add Agenda" />
						</span>
						<ul className="flex h-full w-full flex-col divide-y divide-neutral-200 overflow-y-scroll rounded-md pt-0.5 scrollbar-hide dark:divide-neutral-800 md:!h-screen">
							{agendas.map((agenda, idx) => (
								<Agenda key={agenda.id} agenda={agenda} />
							))}
						</ul>
					</>
				) : (
					<>
						<div className="flex h-full select-none flex-col items-center justify-center space-x-1 space-y-8 text-black">
							<img
								src="/assets/img/noAgenda.png"
								alt="No Agenda's Listed"
								className="w-[25%] md:w-[60%]"
							/>
							<div className="text-slate-500">
								No Agenda's Listed
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default Agendas;
