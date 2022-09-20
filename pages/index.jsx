import { useEffect } from "react";
import { Sidebar } from "../components/organisms";
import { useSidebarStore } from "../store/store";
import { useDarkMode } from "../submodules/shared/hooks";
import { classNames } from "../submodules/shared/utils";

const user = {
	uid: "fq3cc3YVO1UFoZmSL3EnNqntsM92",
	bannerImg: "https://source.unsplash.com/1600x900/?technology",
	profileImage:
		"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
	name: "Ashley Porter",
	username: "ashleyporter",
	email: "ashleyporter@email.com",
	number: "+911234567890",
	title: "Compter Science Student",
	bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
	location: "New York, NY, USA",
	learningHours: "500",
	socials: {
		// twitter: "http://twitter.com",
		// instagram: "https://instagram.com",
		// facebook: "https://facebook.com",
		linkedin: "https://linkedin.com",
		github: "https://github.com",
		web: "https://letsupgrade.in",
	},
};

const SidebarView = ({
	asComponent,
	className,
	enabledSections,
	defaultSection,
}) => {
	if (!asComponent) useDarkMode();

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
		dispatchToSidebar({
			type: "SET_STATE_TYPE",
			payload: { type: "user", value: user },
		});
		dispatchToSidebar({
			type: "SET_STATE_TYPE",
			payload: { type: "loaded", value: true },
		});
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
};

export default SidebarView;
