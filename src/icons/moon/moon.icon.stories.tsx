import type { Meta, StoryObj } from "@storybook/react";
import { MoonIcon } from "./moon.icon";


const meta: Meta<typeof MoonIcon> = {
  title: "ICONS/MoonIcon",
  component: MoonIcon,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MoonIcon>;

export const Sm: Story = {
  args: {
    size: "sm"
  },
};

export const Md: Story = {
  args: {
    size: "md"
  },
};

export const Lg: Story = {
  args: {
    size: "lg"
  },
};

