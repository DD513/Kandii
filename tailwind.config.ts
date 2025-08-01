import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // 啟用 class 模式的暗色主題
  theme: {
    extend: {
      // 可選：加入日系風格色調
      colors: {
        // "sakura-pink": "#F8E1E9",
        // "matcha-green": "#D4E4C9",
        // "washi-gray": "#E8ECEF",
      },
    },
  },
  plugins: [],
};

export default config;
