import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "black-2": "#0a0a0a",
      },
      backgroundImage: {
        "city": "url(/imgs/bg_cidade.jpg)",
        "tailwind": "url(/imgs/tailwind.png)",
      },
    },
  },
  plugins: [],
} satisfies Config;
