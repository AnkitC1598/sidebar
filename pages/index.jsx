import { Sidebar } from "../components/organisms";
import { useDarkMode } from "../submodules/shared/hooks";
import { classNames } from "../submodules/shared/utils";

const SidebarView = ({ asComponent, className, enabledSections, defaultSection }) => {
	if (!asComponent) useDarkMode();
	return (
		<div
			className={classNames(
				"fixed right-0 top-0 hidden flex-1 border-l border-neutral-200 dark:border-neutral-800 sm:mt-0 sm:block sm:h-screen sm:flex-none",
				className
			)}
		>
			<Sidebar
				enabledSections={enabledSections}
				defaultSection={defaultSection}
			/>
		</div>
	);
};

SidebarView.defaultProps = {
	asComponent: false,
	className: "left-0",
	enabledSections: [
		"agenda",
		"chat",
		"doubt",
		"pastebin",
		"participant",
		"settings",
	],
	defaultSection: 'agenda'
};

export default SidebarView;
