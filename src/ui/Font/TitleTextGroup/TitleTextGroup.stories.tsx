import type { Meta, StoryObj } from "@storybook/react";
import { TitleTextGroup } from "./index";

const meta: Meta<typeof TitleTextGroup> = {
  title: "UI/TitleTextGroup",
  component: TitleTextGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TitleTextGroup>;

export const Default: Story = {
  args: {
    title: "Title",
    text: "Text",
  },
};

