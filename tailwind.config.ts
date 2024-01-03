import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#30547c",
        primary_hover: "#30548c",
        danger: "#dc2626",
        danger_hover: "#b91c1c",
        btn: { primary: "#30547c", hover: "#30548c" },

      },
    },
  },
  plugins: [],
};
export default config