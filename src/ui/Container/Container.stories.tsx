import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./index";

const meta: Meta<typeof Container> = {
  title: "UI/Container",
  component: Container,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Sm: Story = {
  args: {
    size: "sm",
    children: "Container sm",
  },
};

export const Md: Story = {
    args: {
      size: "md",
      children: "Container md",
    },
};

export const Lg: Story = {
    args: {
      size: "lg",
      children: "Container lg",
    },
}

export const Xl: Story = {
    args: {
      size: "xl",
      children: "Container xl",
    },
}

export const Xxl: Story = {
    args: {
      size: "2xl",
      children: "Container 2xl",
    },
}
