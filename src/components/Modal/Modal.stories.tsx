import { useArgs } from "@storybook/client-api";
import { Story, Meta } from "@storybook/react";
import React from "react";

import {
  Modal as ModalComponent,
  ModalContent,
  ModalProps,
  ModalTrigger,
  ModalWrapper,
  ModalWrapperProps,
} from "./Modal";

export default {
  title: "Overlay/Modal/Modal",
  component: ModalComponent,
  argTypes: {
    open: { control: "boolean" },
    overlay: { control: "boolean" },
    onOpenChange: { control: false },
    defaultOpen: { control: false },
  },
  args: {
    open: false,
    overlay: true,
  },
} as Meta;

const Template: Story<ModalProps> = (args) => {
  const [, updateArgs] = useArgs();

  return (
    <ModalComponent {...args} onOpenChange={(open) => updateArgs({ open })}>
      <ModalTrigger asChild>
        <button>Open Modal</button>
      </ModalTrigger>

      <ModalWrapper>
        <ModalContent>
          <p>Hello World!</p>
        </ModalContent>
      </ModalWrapper>
    </ModalComponent>
  );
};

export const Modal = Template.bind({});
