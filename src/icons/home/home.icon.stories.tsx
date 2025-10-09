import type { Meta, StoryObj } from "@storybook/react";
import { HomeIcon } from "./home.icon";


const meta: Meta<typeof HomeIcon> = {
  title: "ICONS/HomeIcon",
  component: HomeIcon,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HomeIcon>;

export const Primary: Story = {
  args: {
    
  },
};

