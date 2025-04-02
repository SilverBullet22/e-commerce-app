/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
      fontFamily:{
        almarai:['Almarai', "Arial"],
        cairoBold:['Cairo-Bold', "Arial"],
      }
    },
	},
	plugins: [],
};
