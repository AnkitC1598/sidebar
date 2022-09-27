import {
	MoonIcon,
	SpeakerWaveIcon,
	SpeakerXMarkIcon,
	SunIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { useSidebarStore } from "../../../store/store";
import { Toggle } from "../../../submodules/shared/components/atoms";
import { useDarkMode } from "../../../submodules/shared/hooks";

const Settings = () => {
	const [darkModeEnabled, setDarkModeEnabled] = useDarkMode();
	const [alertsEnabled, setAlertsEnabled] = useState(true);
	const version = useSidebarStore((store) => store.version);

	return (
		<>
			<div className="flex h-navScreen w-full flex-col divide-y divide-neutral-200 text-slate-900 h-screen-ios dark:divide-neutral-800 bg-neutral-50 dark:bg-neutral-900 dark:text-slate-200 md:h-navScreen">
				<div className="flex flex-col flex-1">
					<div className="w-full p-4">
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
					<div className="w-full p-4">
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
				<div className="text-center text-xs py-4 !border-0 space-x-px">
					<span>v</span>
					<span>{version}</span>
				</div>
			</div>
		</>
	);
};

export default Settings;
