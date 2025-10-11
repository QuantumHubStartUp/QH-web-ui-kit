import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./index";

const meta: Meta<typeof Modal> = {
  title: "UI/Modal",
  component: Modal,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    isOpen: true,
    closeOnEscape: true,
    closeOnOverlayClick: true,
    backdropBlur: "none",
    children: <>
        <Modal.Header>Modal Header</Modal.Header>
        <Modal.Body>Modal Body</Modal.Body>
        <Modal.Footer>Modal Footer</Modal.Footer>
    </>,
  },
};
