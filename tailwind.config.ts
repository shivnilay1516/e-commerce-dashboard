import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // Scan your components
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito"', "sans-serif"],
        playfair: ['"Playfair Display"', "serif"],
        robotoSlab: ['"Roboto Slab"', "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
