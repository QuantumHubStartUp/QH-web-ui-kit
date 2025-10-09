import type { Meta, StoryObj } from "@storybook/react";
import { NavigationIcon } from "./navigation.icon";


const meta: Meta<typeof NavigationIcon> = {
  title: "ICONS/NavigationIcon",
  component: NavigationIcon,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NavigationIcon>;

export const Primary: Story = {
  args: {
    
  },
};

