import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from ".";

const meta: Meta<typeof Checkbox> = {
  title: "UI/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {
    label: "it's primary",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "it's secondary",
    variant: "secondary"
  }
}

export const Success: Story = {
  args: {
    label: "it's success",
    variant: "success"
  }
}

export const Danger: Story = {
  args: {
    label: "it's danger",
    variant: "danger"
  }
}


export const Ghost: Story = {
  args: {
    label: "it's ghost",
    variant: "ghost"
  }
}