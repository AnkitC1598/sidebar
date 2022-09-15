import { useEffect } from "react";
import { Sidebar } from "../components/organisms";
import { useSidebarStore } from "../store/store";
import { useDarkMode } from "../submodules/shared/hooks";
import { classNames } from "../submodules/shared/utils";

const SidebarView = ({
	asComponent,
	className,
	enabledSections,
	defaultSection,
}) => {
	if (!asComponent) useDarkMode();

	const dispatchToSidebar = useSidebarStore(
		(store) => store.dispatchToSidebar
	);

	useEffect(
		() =>
			dispatchToSidebar({
				type: "SET_SIDEBAR_SECTION",
				payload: defaultSection,
			}),
		[defaultSection]
	);

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
		"users",
		"profile",
		"settings",
	],
	defaultSection: "agenda",
};

export default SidebarView;
