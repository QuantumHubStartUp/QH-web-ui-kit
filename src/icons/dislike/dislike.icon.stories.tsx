import type { Meta, StoryObj } from "@storybook/react";
import { DislikeIcon } from "./dislike.icon";


const meta: Meta<typeof DislikeIcon> = {
  title: "ICONS/DislikeIcon",
  component: DislikeIcon,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DislikeIcon>;

export const Primary: Story = {
  args: {
    
  },
};

