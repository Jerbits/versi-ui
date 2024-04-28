
import { StoryFn, Meta } from "@storybook/react";
import { Typography } from ".";

export default {
  title: "Example/Typography",
  component: Typography.H1,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof Typography>;


const Template: StoryFn<typeof Typography.H1> = (args) => <Typography.H1 {...args}>Heading 1</Typography.H1>;

export const Heading1 = Template.bind({});
Heading1.args = {
};