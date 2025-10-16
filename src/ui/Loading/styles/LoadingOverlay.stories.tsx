
import type { Meta, StoryObj } from "@storybook/react";
import { LoadingOverlay } from "../index";

const meta: Meta<typeof LoadingOverlay> = {
  title: "UI/Loading/LoadingOverlay",
  component: LoadingOverlay,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LoadingOverlay>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};


