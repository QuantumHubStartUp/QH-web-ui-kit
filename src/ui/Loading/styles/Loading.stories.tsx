import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from "../index";

const meta: Meta<typeof Loading> = {
  title: "UI/Loading",
  component: Loading,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};


