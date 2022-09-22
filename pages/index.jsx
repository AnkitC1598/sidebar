import axios from "axios";
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
	user,
}) => {
	if (!asComponent) useDarkMode();

	if (
		Object.prototype.toString.call(user) !== "[object Object]" &&
		asComponent
	)
		throw new Error("SidebarView: user object is required");

	const { loaded, dispatchToSidebar } = useSidebarStore((store) => ({
		loaded: store.loaded,
		dispatchToSidebar: store.dispatchToSidebar,
	}));

	useEffect(
		() =>
			dispatchToSidebar({
				type: "SET_SIDEBAR_SECTION",
				payload: defaultSection,
			}),
		[defaultSection]
	);

	useEffect(() => {
		if (user) {
			dispatchToSidebar({
				type: "SET_STATE_TYPE",
				payload: { type: "user", value: user },
			});
			dispatchToSidebar({
				type: "SET_STATE_TYPE",
				payload: { type: "loaded", value: true },
			});
		}
	}, []);

	return loaded ? (
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
	) : null;
};

SidebarView.defaultProps = {
	asComponent: false,
	className: "left-0",
	enabledSections: [
		// "agenda",
		"chat",
		// "doubt",
		"pastebin",
		"quiz",
		"users",
		"profile",
		"settings",
	],
	defaultSection: "agenda",
	user: null,
};

export default SidebarView;
