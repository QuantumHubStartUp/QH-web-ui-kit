import type { Meta, StoryObj } from "@storybook/react";
import { LikeIcon } from "./like.icon";


const meta: Meta<typeof LikeIcon> = {
  title: "ICONS/LikeIcon",
  component: LikeIcon,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LikeIcon>;

export const Primary: Story = {
  args: {
    
  },
};

