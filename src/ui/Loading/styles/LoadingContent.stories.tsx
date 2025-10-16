import type { Meta, StoryObj } from "@storybook/react";
import { LoadingContent } from "../index";

const meta: Meta<typeof LoadingContent> = {
  title: "UI/Loading/LoadingContent",
  component: LoadingContent,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LoadingContent>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Hello"
  },
};


