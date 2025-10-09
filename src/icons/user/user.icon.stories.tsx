import type { Meta, StoryObj } from "@storybook/react";
import { UserIcon } from "./user.icon";


const meta: Meta<typeof UserIcon> = {
  title: "ICONS/UserIcon",
  component: UserIcon,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof UserIcon>;

export const Primary: Story = {
  args: {
    
  },
};

