/** @type {import('tailwindcss').Config} */
import { spectrum } from "./src/theme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: spectrum,
    },
  },
  plugins: [],
};
