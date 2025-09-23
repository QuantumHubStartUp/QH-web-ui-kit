/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
      "./.storybook/**/*.{js,ts,jsx,tsx,mdx}", // 👈 важно, иначе стили могут не подтянуться в Storybook
    ],
    darkMode: "class", // 👈 переключение по классу (нужно для Storybook)
    theme: {
      extend: {},
    },
    plugins: [],
  };
  