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
	title: "Code Storming 💻",
	bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, voluptas! Consequuntur quis ullam accusantium.",
	location: "New York, NY, USA",
	learningHours: "500",
	socials: {
		twitter: "http://twitter.com",
		instagram: "https://instagram.com",
		linkedin: "https://linkedin.com",
		facebook: "https://facebook.com",
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

	useEffect(() => {
		dispatchToSidebar({
			type: "SET_STATE_TYPE",
			payload: { type: "user", value: user },
		});
	}, []);

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
