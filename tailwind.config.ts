import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'lowerGradient': '#001A49',
        'upperGradient': '#0070AF',
        'greyAccent': "#EEEEF4"
      },
      screens: {
        'xs': '375px',
        'zeroWidth': '0px'
      }
    },
  },
  plugins: [],
};
export default config;
