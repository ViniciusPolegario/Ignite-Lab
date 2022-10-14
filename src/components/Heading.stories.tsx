import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<HeadingProps>;

export const Small: StoryObj<HeadingProps> = {
  args: {
    children: "Small Heading.",
    size: "sm",
  },
};

export const Default: StoryObj<HeadingProps> = {
  args: {
    children: "Default Heading",
    size: "md",
  },
};

export const Large: StoryObj<HeadingProps> = {
  args: {
    children: "Large Heading.",
    size: "lg",
  },
};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChield: true,
    children: <h1>Custom Component</h1>,
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
