import type { Meta, StoryObj } from "@storybook/react";
import { SunIcon } from "./sun.icon";


const meta: Meta<typeof SunIcon> = {
  title: "ICONS/SunIcon",
  component: SunIcon,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SunIcon>;

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

