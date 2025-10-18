import type { Meta, StoryObj } from "@storybook/react";
import { Notice } from "../Notice";


const meta: Meta<typeof Notice> = {
  title: "UI/Notice",
  component: Notice,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Notice>;

export const Info: Story = {
  args: {
    title: "Title",
    message: "Message",
    variant: "info",
  },
};

export const Error: Story = {
  args: {
    title: "Title",
    message: "Message",
    variant: "error",
  },
};

export const Success: Story = {
  args: {
    title: "Title",
    message: "Message",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    title: "Title",
    message: "Message",
    variant: "warning",
  },
};