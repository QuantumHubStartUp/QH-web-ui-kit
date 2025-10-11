import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./index";

const meta: Meta<typeof Dropdown> = {
  title: "UI/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
  args: {
    variant: "primary",
    items: [
      {
        label: "Item 1",
        value: "item-1",
      },
      {
        label: "Item 2",
        value: "item-2",
      },
      {
        label: "Item 3",
        value: "item-3",
      }
    ],
    children: "Dropdown",
  },
};


export const Secondary: Story = {
  args: {
    variant: "secondary",
    items: [
      {
        label: "Item 1",
        value: "item-1",
      },
      {
        label: "Item 2",
        value: "item-2",
      },
      {
        label: "Item 3",
        value: "item-3",
      }
    ],
    children: "Dropdown",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    items: [
      {
        label: "Item 1",
        value: "item-1",
      },
      {
        label: "Item 2",
        value: "item-2",
      },
      {
        label: "Item 3",
        value: "item-3",
      }
    ],
    children: "Dropdown",
  },
};