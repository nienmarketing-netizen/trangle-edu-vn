import type { Config } from "tailwindcss";

const config: Config = {
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
        editorial: {
          black: "#020101",
          sage: "#CBD1CF",
          peach: "#FFD2C3",
          blush: "#FFEAE3",
          cream: "#FAF4E8",
          yellow: "#F5FE6C",
          blue: "#487AFF",
          border: "#181818",
        },
      },
      fontFamily: {
        magnificent: ["SVN-Magnificent", "serif"],
        outersans: ["SVN-OuterSans-Regular", "sans-serif"],
        "outersans-thin": ["SVN-OuterSans-Thin", "sans-serif"],
        "outersans-outline": ["SVN-OuterSansOutline-Regular", "sans-serif"],
        ginger: ["SVN-Ginger", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
