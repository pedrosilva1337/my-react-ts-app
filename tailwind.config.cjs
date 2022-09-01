/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			flexBasis: {
				49: "49%",
			},
		},
	},
	plugins: [],
};
