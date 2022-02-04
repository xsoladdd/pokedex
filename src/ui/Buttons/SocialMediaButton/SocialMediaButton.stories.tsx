import { ComponentMeta, ComponentStory } from "@storybook/react";
import { sizeVariant } from "../../../utils/constants";
import Button from "./SocialMediaButton";
import { socialMediaVariant } from "./types";

export default {
  title: "Common/Button/Social Media Button",
  component: Button,
  args: {
    onClick: console.log("hey"),
  },
  argTypes: {
    size: {
      control: { type: "select", options: sizeVariant },
    },
    type: {
      control: {
        type: "select",
        options: socialMediaVariant,
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const SocialMediaButton = Template.bind({});
SocialMediaButton.args = {
  label: true,
  disabled: true,
};
