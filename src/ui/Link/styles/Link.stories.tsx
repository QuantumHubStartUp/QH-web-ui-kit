import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./index";

const meta: Meta<typeof Link> = {
  title: "UI/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: { type: 'text' },
      description: 'Компонент для рендера (a, Link из react-router-dom, NextLink и т.д.)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    children: "Primary Link",
    variant: "primary",
    href: "#",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Link",
    variant: "secondary",
    href: "#",
  },
};

export const Success: Story = {
  args: {
    children: "Success Link",
    variant: "success",
    href: "#",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger Link",
    variant: "danger",
    href: "#",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost Link",
    variant: "ghost",
    href: "#",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Link",
    variant: "outline",
    href: "#",
  },
};

export const ButtonLike: Story = {
  args: {
    children: "Button-like Link",
    variant: "button-like",
    href: "#",
  },
};

export const ButtonLikeSecondary: Story = {
  args: {
    children: "Button-like Secondary",
    variant: "button-like-secondary",
    href: "#",
  },
};

export const ButtonLikeSuccess: Story = {
  args: {
    children: "Button-like Success",
    variant: "button-like-success",
    href: "#",
  },
};

export const ButtonLikeDanger: Story = {
  args: {
    children: "Button-like Danger",
    variant: "button-like-danger",
    href: "#",
  },
};

export const ButtonLikeGhost: Story = {
  args: {
    children: "Button-like Ghost",
    variant: "button-like-ghost",
    href: "#",
  },
};

export const ButtonLikeOutline: Story = {
  args: {
    children: "Button-like Outline",
    variant: "button-like-outline",
    href: "#",
  },
};

export const WithCustomComponent: Story = {
  args: {
    children: "Custom Component Link",
    variant: "button-like",
    as: "button",
    onClick: () => console.log("Clicked!"),
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Link href="#" variant="button-like" size="sm">
        Small Button-like
      </Link>
      <Link href="#" variant="button-like" size="md">
        Medium Button-like
      </Link>
      <Link href="#" variant="button-like" size="lg">
        Large Button-like
      </Link>
    </div>
  ),
};

export const AllButtonLikeVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Link href="#" variant="button-like">
        Primary
      </Link>
      <Link href="#" variant="button-like-secondary">
        Secondary
      </Link>
      <Link href="#" variant="button-like-success">
        Success
      </Link>
      <Link href="#" variant="button-like-danger">
        Danger
      </Link>
      <Link href="#" variant="button-like-ghost">
        Ghost
      </Link>
      <Link href="#" variant="button-like-outline">
        Outline
      </Link>
    </div>
  ),
};