/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeOne: "#f76c6c",
        themeTwo: "#24305e",
        additionalOne: "#374785",
        additionalTwo: "#a8d0e6",
        accent: "#f8e9a1",
      },
    },
  },
  plugins: [],
};
