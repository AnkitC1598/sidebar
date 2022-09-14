import { Sidebar } from "../components/organisms";
import { useDarkMode } from "../submodules/shared/hooks";
import { classNames } from "../submodules/shared/utils";

const SidebarView = ({
	asComponent,
	className,
	enabledSections,
	defaultSection,
	dispatchToSidebar,
	sideBarOpen,
}) => {
	if (!asComponent) useDarkMode();
	return (
		<div
			className={classNames(
				"fixed right-0 top-0 flex-1 sm:mt-0 sm:h-screen sm:flex-none transition-all duration-500",
				className
			)}
		>
			<Sidebar
				toolTipDir={asComponent ? "left" : "right"}
				enabledSections={enabledSections}
				defaultSection={defaultSection}
				dispatchToSidebar={dispatchToSidebar}
				sideBarOpen={sideBarOpen}
			/>
		</div>
	);
};

SidebarView.defaultProps = {
	asComponent: false,
	className: "left-0",
	enabledSections: [
		// "agenda",
		"chat",
		// "doubt",
		"pastebin",
		"participant",
		"settings",
	],
	defaultSection: "agenda",
	dispatchToSidebar: () => false,
	sideBarOpen: true,
};

export default SidebarView;
