import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./index";

const meta: Meta<typeof Title> = {
  title: "UI/Title",
  component: Title,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    level: "h2",
    children: "Title",
  },
};

