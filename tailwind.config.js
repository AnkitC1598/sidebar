/** @type {import('tailwindcss').Config} */
const SharedTailwindConfig = require("./submodules/shared/tailwind.config");

const SharedTailwindConfigThemeExtend = SharedTailwindConfig.theme.extend;
const ExtendedTheme = {
	height: {
		available: "-webkit-fill-available",
	},
};
const MergedExtentedTheme = {};
Object.keys(SharedTailwindConfigThemeExtend).forEach((key) =>
	ExtendedTheme.hasOwnProperty(key)
		? (MergedExtentedTheme[key] = {
			...ExtendedTheme[key],
			...SharedTailwindConfigThemeExtend[key],
		})
		: (MergedExtentedTheme[key] = SharedTailwindConfigThemeExtend[key])
);

const SharedTailwindConfigPlugins = SharedTailwindConfig.plugins;
const ExtendedPlugins = []
const MergedPlugins = [...SharedTailwindConfigPlugins, ...ExtendedPlugins];

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./submodules/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: MergedExtentedTheme,
	},
	plugins: MergedPlugins,
};
