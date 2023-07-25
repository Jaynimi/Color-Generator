/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
				quicksand: ["Quicksand", "cursive"],
				pacifico: ["Pacifico", "cursive"],
				lobster: ["Lobster", "cursive"],
				satisfy: ["Satisfy", "cursive"],
				tangerine: ["Tangerine", "cursive"],
				cookie: ["Cookie", "cursive"],
			},
			colors: {
				header: "#352839",
				box: "#f7f3f9",
			},
			gridTemplateColumns: {
				column: "repeat(auto-fit, minmax(223.33px, 1fr))",
			},
			spacing: {
				large: "16.6666667%",
			},
		},
	},
	plugins: [],
};
