
import { StoryFn, Meta } from "@storybook/react";
import { Typography } from ".";

export default {
  title: "Example/Typography",
  component: Typography,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof Typography>;

const mockedLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Template: StoryFn<typeof Typography> = (args) => <Typography {...args} />;

export const FooterWithLinks = Template.bind({});
FooterWithLinks.args = {
  links: mockedLinks,
};

export const FooterWithOneLink = Template.bind({});
FooterWithOneLink.args = {
  links: [mockedLinks[0]],
};