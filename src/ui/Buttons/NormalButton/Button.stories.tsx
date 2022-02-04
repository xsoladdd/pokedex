import { ComponentMeta, ComponentStory } from "@storybook/react";
import { colorVariant, sizeVariant } from "../../../utils/constants";

import Button from "./Button";

export default {
  title: "Common/Button/Normal Button",
  component: Button,
  args: {
    onClick: console.log("hey"),
  },
  argTypes: {
    size: {
      control: { type: "select", options: sizeVariant },
    },
    variant: {
      control: {
        type: "select",
        options: colorVariant,
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const NormalButton = Template.bind({});
NormalButton.args = {
  children: "Click me!",
  disabled: true,
  variant: "primary",
  // size: "medium",
};
