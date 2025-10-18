import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../index";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Click me",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Click me",
    variant: "secondary",
  },
};

export const Success: Story = {
  args: {
    children: "Click me",
    variant: "success",
  },
};

export const Danger: Story = {
  args: {
    children: "Click me",
    variant: "danger",
  }
}

export const Ghost: Story = {
  args: {
    children: "Click me",
    variant: "ghost",
  }
}

export const Outline: Story = {
  args: {
    children: "Click me",
    variant: "outline",
  }
}