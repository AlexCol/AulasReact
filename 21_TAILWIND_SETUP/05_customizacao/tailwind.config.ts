import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      colors: { //cores customizadas
        black2: "#152", // Adiciona ou sobrescreve apenas `black`
        redBlue: "#F0F", // Adiciona ou sobrescreve apenas `red`
        "redBlue-2": "#0FF", // Adiciona ou sobrescreve apenas `red`

        red: {
          ...require("tailwindcss/colors").red, // Inclui os shades padrão
          150: "#ffe6e6", // Adiciona um shade personalizado red-150
          850: "#990000", // Adiciona um shade mais escuro personalizado red-850
        },
      },
      screens: { // Adiciona um novo breakpoint chamado `tablet`, que inicia em 400px, sendo menor que o `sm`
        tablet: "400px", // Inicia no breakpoint de tablet
      },
      spacing: { // Adiciona um novo espaçamento chamado `15`
        15: "3.75rem", // 60px
      },
    },
  },
  plugins: [],
} satisfies Config;
