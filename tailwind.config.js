/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        prompt: ["Prompt", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        'bg-what': "url('./src/assets/bgWhatt.png')",
      },
    },
  },
  plugins: [],
};
