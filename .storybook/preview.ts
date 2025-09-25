import type { Preview } from '@storybook/react-vite'

import "../src/global.css";



const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    themes: {
      default: "light",
      list: [
        { name: "light", class: "light", color: "#ffffff" },
        { name: "dark", class: "dark", color: "#000000" },
      ],
    },

    a11y: {
      test: 'todo'
    }
  },
};

export default preview;