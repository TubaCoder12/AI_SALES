/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pragati: ["Pragati Narrow"],
      },
      screens: {
        xxl: "1440px", // ✅ ab ye extend ho gaya default screens ke sath
      },
    },
  },
  plugins: [],
};
