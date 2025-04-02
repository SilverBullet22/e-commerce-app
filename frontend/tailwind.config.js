/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
      fontFamily:{
        // regularAlmarai:['Almarai-Regular', "Arial"],
        // boldAlmarai:['Almarai-Bold', "Arial"],
        // extraboldAlmarai:['Almarai-ExtraBold', "Arial"],
        // lightAlmarai:['Almarai-Light', "Arial"],
        almarai:['Almarai', "Arial"],
        cairoBold:['Cairo-Bold', "Arial"],
      }
    },
	},
	plugins: [],
};
