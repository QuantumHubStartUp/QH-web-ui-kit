import type { Meta, StoryObj } from "@storybook/react";
import { ToggleTheme } from "..";

const meta: Meta<typeof ToggleTheme> = {
  title: "FEATURES/ToggleTheme",
  component: ToggleTheme,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ToggleTheme>;

export const Icon: Story = {
  args: {
    variant: "icon",
  },
};


export const Button: Story = {
  args: {
    variant: "button",
  },
};

export const Switch: Story = {
  args: {
    variant: "switch",
  },
};


export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 items-center p-6">
      <div className="flex gap-4 items-center">
        <ToggleTheme variant="icon" size="sm" />
        <ToggleTheme variant="icon" size="md" />
        <ToggleTheme variant="icon" size="lg" />
      </div>
      
      <div className="flex gap-4 items-center">
        <ToggleTheme variant="icon" size="md" showLabel />
        <ToggleTheme variant="button" size="md" />
        <ToggleTheme variant="button" size="md" showLabel />
      </div>
      
      <div className="flex gap-4 items-center">
        <ToggleTheme variant="switch" />
      </div>
    </div>
  ),
};