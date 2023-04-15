/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 20s linear infinite",
        float: "float 6s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(-50%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        float: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-35px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "2.5rem",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      blue: "#3EA2FD",
      "gray-300": "#D6D3D1",
      "gray-500": "#78716C",
      "gray-700": "#44403C",
      "gray-800": "#292524",
      "light-blue": "#90F9FE",
      black: "#000000",
    },
  },
  plugins: [],
};
