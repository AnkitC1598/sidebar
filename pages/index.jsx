import axios from "axios";
import { useEffect } from "react";
import { Sidebar } from "../components/organisms";
import { useGetChats } from "../hooks/query/chat";
import { useSidebarStore } from "../store/store";
import { useDarkMode } from "../submodules/shared/hooks";
import CookieService from "../submodules/shared/services/cookie.service";
import { classNames } from "../submodules/shared/utils";

const SidebarView = ({
	asComponent,
	className,
	enabledSections,
	defaultSection,
	user,
}) => {
	if (
		Object.prototype.toString.call(user) !== "[object Object]" &&
		asComponent
	)
		throw new Error("SidebarView: user object is required");

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

	useGetChats();

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
		} else {
			axios
				.get(
					"https://api.letsupgrade.net/v1/auth/profile?fields=uid,createdAt,name,username,profileImage,coverImage,coins,verified,socialMediaHandles",
					{
						headers: {
							Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFua2l0Y2hhdWRoYXJpMTU5OEBnbWFpbC5jb20iLCJ1aWQiOiJISnJjQ0VZcExZaEhnSEdpNEZRd3ZTT3hnYjYyIiwicm9sZSI6Im1lbWJlciIsImlhdCI6MTY2Mzg0ODkyOX0.1xrwz_FXnbnl2ekXDV7OyuIjnTO6QPcJmKRDUsAzO84`,
						},
					}
				)
				.then((resp) => {
					CookieService.updateLocalAccessToken(
						"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFua2l0Y2hhdWRoYXJpMTU5OEBnbWFpbC5jb20iLCJ1aWQiOiJISnJjQ0VZcExZaEhnSEdpNEZRd3ZTT3hnYjYyIiwicm9sZSI6Im1lbWJlciIsImlhdCI6MTY2Mzg0ODkyOX0.1xrwz_FXnbnl2ekXDV7OyuIjnTO6QPcJmKRDUsAzO84"
					);
					const user = resp.data.results.data;
					if (user.profileImage === null)
						user.profileImage = `https://avatars.dicebear.com/api/initials/${user.username.replace(
							" ",
							"-"
						)}.svg`;
					if (user.coverImage === null)
						user.coverImage =
							"https://source.unsplash.com/1600x900/?technology";
					dispatchToSidebar({
						type: "SET_STATE_TYPE",
						payload: { type: "user", value: user },
					});
					dispatchToSidebar({
						type: "SET_STATE_TYPE",
						payload: { type: "loaded", value: true },
					});
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
