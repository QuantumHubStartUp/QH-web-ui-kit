import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Test/DarkMode",
};

export default meta;
type Story = StoryObj;

export const Test: Story = {
  render: () => (
    <div className="p-4 bg-white text-black dark:bg-black dark:text-white">
      Тест темной темы
    </div>
  ),
};
