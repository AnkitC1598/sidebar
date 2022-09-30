import {
	MoonIcon,
	SpeakerWaveIcon,
	SpeakerXMarkIcon,
	SunIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { useSidebarStore } from "../../../store/store";
import { Button, Toggle } from "../../../submodules/shared/components/atoms";
import { useDarkMode } from "../../../submodules/shared/hooks";
import CookieService from "../../../submodules/shared/services/cookie.service";

const Settings = ({ dispatchToApp }) => {
	if (Object.prototype.toString.call(dispatchToApp) !== "[object Object]")
		throw new Error("Settings: dispatchToApp is not a function");
	const dispatchToSidebar = useSidebarStore(
		(store) => store.dispatchToSidebar
	);
	const [darkModeEnabled, setDarkModeEnabled] = useDarkMode();
	const [alertsEnabled, setAlertsEnabled] = useState(true);
	const version = useSidebarStore((store) => store.version);

	const logout = () => {
		CookieService.removeTokens();
		dispatchToSidebar({
			type: "SET_STATE_TYPE",
			payload: { type: "user", value: null },
		});
		dispatchToApp({ type: "LOGOUT" });
	};

	return (
		<>
			<div className="flex h-navScreen w-full flex-col divide-y divide-neutral-200 text-slate-900 h-screen-ios dark:divide-neutral-800 bg-neutral-50 dark:bg-neutral-900 dark:text-slate-200 md:h-navScreen">
				<div className="flex flex-col justify-between h-full divide-y divide-neutral-200 dark:divide-neutral-800 p-4">
					<div className="flex flex-col flex-1 space-y-4">
						<div className="w-full">
							<Toggle
								label="Dark Mode"
								id="dark"
								falseIcon={
									<SunIcon className="h-3 w-3 text-lu-500" />
								}
								trueIcon={
									<MoonIcon className="h-3 w-3 text-gray-900" />
								}
								trueState={{
									bg: "bg-lu-500",
									icon: MoonIcon,
									iconColor: "text-gray-900",
								}}
								falseState={{
									bg: "bg-neutral-200",
									icon: SunIcon,
									iconColor: "text-lu-500",
								}}
								value={darkModeEnabled}
								onChange={setDarkModeEnabled}
							/>
						</div>
						<div className="w-full">
							<Toggle
								label="Alerts"
								id="alerts"
								trueState={{
									bg: "bg-lu-500",
									icon: SpeakerWaveIcon,
									iconColor: "text-gray-900",
								}}
								falseState={{
									bg: "bg-neutral-200",
									icon: SpeakerXMarkIcon,
									iconColor: "text-gray-900",
								}}
								value={alertsEnabled}
								onChange={setAlertsEnabled}
							/>
						</div>
					</div>
					<div className="text-center text-xs pt-8">
						<Button label="Logout" action={logout} />
					</div>
				</div>
				<div className="text-center text-xs py-4 space-x-px">
					<span>v</span>
					<span>{version}</span>
				</div>
			</div>
		</>
	);
};

export default Settings;
