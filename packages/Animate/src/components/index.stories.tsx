
import { StoryFn, Meta } from "@storybook/react";
import { Animate } from ".";

export default {
    title: "Example/Animate",
    component: Animate,
    parameters: {
        layout: "fullscreen",
    },
} as Meta<typeof Animate>;

const mockedLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

const Template: StoryFn<typeof Animate> = (args) => <Animate {...args} />;

export const FooterWithLinks = Template.bind({});
FooterWithLinks.args = {
    links: mockedLinks,
};

export const FooterWithOneLink = Template.bind({});
FooterWithOneLink.args = {
    links: [mockedLinks[0]],
};