import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll-left': 'infinite-scroll-left 20s linear infinite',
        'infinite-scroll-right': 'infinite-scroll-right 20s linear infinite',
      },
      keyframes: {
        'infinite-scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        primary :"#012d87",
        suppport :"#F2F6FF",
        borderCustom:"#DDE6F8",
        borderTextHeader:"#2A387F",
        featureHeader:"#494F6F",
        featureSubHeader:"#6D76A3",
        newBox:"#F2F6FF",
        placeholder:"#667085"

      }
    },
  },
  plugins: [],
};
export default config;
