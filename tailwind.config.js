/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#c73B0F",
        "rose-900": "#260F08",
        "rose-500": "#87635A",
        "rose-400": "#ADBA85",
        "rose-300": "#CAAFA7",
        "rose-100": "#F5EEEC",
        "rose-50": "#FCF8F6",
        green: "#1EA575",
        black: "#000000",
        white: "#ffffff",
      },
      fontFamily: {
        body: ["Red Hat Text", "serif"],
      },
      fontSize: {
        xl: "2.5rem",
        sm: "1.5rem",
        xxl: "1rem",
        xsm: "0.875rem",
      },
    },
  },
  plugins: [],
};
