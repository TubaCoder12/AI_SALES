/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pragati: ["Pragati Narrow"],
        inter: ["Inter"],
      },
      screens: {
        xxl: "1440px",
        xll: "1280px",
      },
    },
  },
  plugins: [],
};
