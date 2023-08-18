import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
            "backdrop": "#17181A", 
            "primary": "#76FEAA",
            "text-gray": "#8E91B9",
            "text-gray-alt": "#A1ABBC"
        },
    },
  },
  plugins: [],
} satisfies Config;
