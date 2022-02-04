import { ComponentMeta, ComponentStory } from "@storybook/react";
import Switch from "./Switch";

export default {
  title: "Common/Switch",
  component: Switch,
  args: {
    onClick: console.log("hey"),
  },
  argTypes: {
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary", "danger", "warning"],
      },
    },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const NormalSwitch = Template.bind({});
NormalSwitch.args = {
  status: true,
  variant: "primary",
  size: "medium",
  disabled: false,
};
