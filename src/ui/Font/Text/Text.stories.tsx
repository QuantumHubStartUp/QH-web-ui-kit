import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./index";

const meta: Meta<typeof Text> = {
  title: "UI/Text",
  component: Text,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Text",
  },
};


export const Muted: Story = {
  args: {
    variant: "muted",
    children: "Text",
  },
};


export const Success: Story = {
  args: {
    variant: "success",
    children: "Text",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children: "Text",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children: "Text",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Text",
  },
};

