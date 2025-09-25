/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
  ],
  // Уберите darkMode, так как в v4 используется другой подход
  theme: {
    extend: {
      colors: {
        // Определите цвета для темной темы явно
        dark: {
          background: '#1a202c',
          text: '#f7fafc',
          // добавьте другие цвета по необходимости
        }
      }
    },
  },
  plugins: [],
}