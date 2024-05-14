/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#8b5cf6",
        text: "#6b6f76",
      },
      boxShadow: {
        "3lg":
          " 0px 0px 20px 2px rgb(0 0 0 / 0.1), 0px 0px 0px 0px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
