// import { withThemeByClassName } from '@storybook/addon-themes';
// import '../src/global.css';

// /** @type { import('@storybook/react').Preview } */
// const preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//     // Добавьте фоновые цвета для лучшей видимости
//     backgrounds: {
//       default: 'light',
//       values: [
//         { name: 'light', value: '#ffffff' },
//         { name: 'dark', value: '#1a202c' },
//       ],
//     },
//   },

//   decorators: [
//     withThemeByClassName({
//       themes: {
//         light: 'light',
//         dark: 'dark',
//       },
//       defaultTheme: 'dark',
//     }),
//   ],
// };

// export default preview;




import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/global.css';
import React from 'react';

// Кастомный декоратор для фона
const withBackground = (Story, context) => {
  const theme = context.globals.theme || 'dark';
  
  // Добавляем стили для фона Storybook
  const style = document.createElement('style');
  style.textContent = `
    .sb-main-padded.sb-show-main {
      background-color: ${theme === 'dark' ? '#1a202c' : '#ffffff'};
      transition: background-color 0.3s ease;
      min-height: 100vh;
    }
  `;
  document.head.appendChild(style);

  return <Story />;
};

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true, // Отключаем стандартные backgrounds
    },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
    withBackground, // Добавляем наш декоратор
  ],
};

export default preview;