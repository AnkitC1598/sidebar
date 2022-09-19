import { useSidebarStore } from "../../../store/store";
import {
	Options,
	Role,
	Tooltip,
} from "../../../submodules/shared/components/atoms";
import { Medal } from "../../../submodules/shared/icons";
import { classNames } from "../../../submodules/shared/utils";

const currentUser = "aVNhQHe1N8ZibeFmGh5zK8eAh9t2";

const getPositionColor = (position) => {
	switch (position) {
		case 1:
			return "text-yellow-500";
		case 2:
			return "text-slate-400";
		case 3:
			return "text-amber-700";
		default:
			return "text-gray-500";
	}
};

const Participant = ({ participant, showPosition, options }) => {
	if (Object.prototype.toString.call(options) === "[object Null]") {
		const dispatchToSidebar = useSidebarStore(
			(store) => store.dispatchToSidebar
		);
		options = [
			{
				label: "View Profile",
				action: () =>
					dispatchToSidebar({
						type: "SET_OVERLAP_SECTION",
						payload: {
							component: "profile",
							title: `@${participant.username}`,
							props: {
								user: participant,
							},
						},
					}),
			},
			{
				label: "Send Message",
				action: () =>
					dispatchToSidebar({
						type: "SET_SIDEBAR_SECTION",
						payload: "chat",
					}),
			},
		];
	}
	console.log(options);
	return (
		<>
			<div className="flex w-full flex-1 items-center space-x-2 p-4">
				{showPosition ? (
					<span className="w-6 flex justify-center items-center">
						{participant.position < 4 ? (
							<Medal
								className={classNames(
									"h-5 w-5",
									getPositionColor(participant.position)
								)}
							/>
						) : (
							<span className="text-sm font-medium text-slate-900 dark:text-slate-200 text-center">
								# {participant.position}
							</span>
						)}
					</span>
				) : null}
				<div className="relative flex-shrink-0">
					<img
						src={
							participant.profileImage
								? participant.profileImage
								: `https://avatars.dicebear.com/api/initials/${participant.name}.svg`
						}
						alt={participant.name}
						className="square h-10 rounded-md"
					/>
					{!participant.isOnline ? (
						<span
							className={classNames(
								"absolute top-0 right-0 block h-2.5 w-2.5 -translate-y-1/4 translate-x-1/4 transform rounded-full ring-2 ring-neutral-50 dark:ring-neutral-900 bg-green-400"
							)}
							aria-hidden="true"
						/>
					) : null}
				</div>
				<div className="min-w-0 flex-1 px-2 md:grid md:gap-1">
					<div className="w-[80%] truncate">
						<div className="group relative flex space-x-1">
							<span
								className={classNames(
									"truncate text-sm font-medium text-slate-900 dark:text-slate-200",
									participant.participantId && "!text-lu-500"
								)}
							>
								{currentUser === participant.uid
									? "You"
									: participant.name}
							</span>
							<Role role={participant.role} />
							<Tooltip
								position="top"
								label={`${participant.name} (${participant.role})`}
							/>
						</div>
						<a
							href={`https://letsupgrade.in/user/${participant.username}`}
							target="_blank"
							className="flex items-center text-xs text-slate-400 hover:text-lu-500 dark:text-slate-500"
							rel="noreferrer"
						>
							<span className="truncate">
								@{participant.username}
							</span>
						</a>
					</div>
				</div>
				<Options options={options} />
			</div>
		</>
	);
};

Participant.defaultProps = {
	participants: [],
	showPosition: true,
	options: null,
};

export default Participant;
