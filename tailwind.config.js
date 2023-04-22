/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        loading: "loading 3s infinite alternate",
      },
      keyframes: {
        loading: {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1.8)" },
          "100%": { transform: "scale(0)" },
        },
      },
    },
  },
  plugins: [],
};
