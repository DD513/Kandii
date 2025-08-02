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
      // colors: {
      //   "primary-red": '#E54B5D',
      //   "primary-blue": '#274884',
      //   "primary-yellow": '#F5D84B',
      //   "primary-gray": '#ECE7E6',
      //   "primary-brand": '#64C5DE',
      //   "primary-footer": '#ECF4F7',
      //   "background": '#ffffff',
      //   "font": '#000000',
      // },
    },
  },
  plugins: [],
};

export default config;
