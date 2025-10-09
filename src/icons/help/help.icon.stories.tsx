import type { Meta, StoryObj } from "@storybook/react";
import { HelpIcon } from "./help.icon";


const meta: Meta<typeof HelpIcon> = {
  title: "ICONS/HelpIcon",
  component: HelpIcon,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HelpIcon>;

export const Primary: Story = {
  args: {
    
  },
};

