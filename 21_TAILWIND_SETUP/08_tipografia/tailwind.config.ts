import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'arial': ['Arial', 'sans-serif'],
      },
      colors: {
        "black-2": "#0a0a0a",
      },
    },
  },
  plugins: [],
} satisfies Config;
