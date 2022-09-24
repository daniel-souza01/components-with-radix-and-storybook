import { Story, ComponentMeta } from "@storybook/react";

import { Button, ButtonProps } from ".";

export default {
  title: "Buttons/Button",
  component: Button,
  argTypes: {
    variant: {
      // defaultValue: "primary",
      control: {
        type: "select",
        values: ["primary", "secondary", "outline"],
      },
    },
  },
} as ComponentMeta<typeof Button>;

export const Primary: Story<ButtonProps> = (args) => (
  <Button {...args}>Primary button</Button>
);

export const Secondary: Story<ButtonProps> = (args) => (
  <Button {...args}>Secondary button</Button>
);

Secondary.args = {
  variant: "secondary",
};

export const Outline: Story<ButtonProps> = (args) => (
  <Button {...args}>Outline button</Button>
);

Outline.args = {
  variant: "outline",
};
