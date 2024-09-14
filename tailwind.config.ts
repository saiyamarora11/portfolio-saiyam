import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["var(--font-poppins)", "sans-serif"],
				sixCaps: ["var(--font-six-caps)", "sans-serif"],
			},
			fontSize: {
				"responsive-sm": "6rem",
				"responsive-md": "8rem",
				"responsive-lg": "12rem",
				"responsive-xl": "18rem",
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["dark"],
	},
};

export default config;
