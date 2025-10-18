import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../index";

import { CardBody } from "../components/CardBody";

import { CardHead } from "../components/CardHead";
import { CardFooter } from "../components/CardFooter";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: <div>
      <CardHead>Header</CardHead>
      <CardBody>Body</CardBody>
      <CardFooter>Footer</CardFooter>
    </div>,
  },
};

export const Elevated: Story = {
  args: {
    variant: "elevated",
    children: <div>
      <CardHead>Header</CardHead>
      <CardBody>Body</CardBody>
      <CardFooter>Footer</CardFooter>
    </div>,
  },
};