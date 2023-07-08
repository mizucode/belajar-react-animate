/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		container: {
			center: true,
			padding: "16px",
		},
		extend: {
			colors: {
				"bg-pink": "#FF78C4",
				ungu: "#E1AEFF",
			},
		},
	},
	plugins: [],
};
