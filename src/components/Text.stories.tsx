import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>;

export const Small: StoryObj<TextProps> = {
  args: {
    children: "Small Text.",
    size: "sm",
  },
};

export const Default: StoryObj<TextProps> = {
  args: {
    children: "Default Text",
    size: "md",
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    children: "Large Text.",
    size: "lg",
  },
};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChield: true,
    children: <p>Custom Component</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChield: {
      table: {
        disable: true,
      },
    },
  },
};
