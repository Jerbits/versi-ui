
import { StoryFn, Meta } from "@storybook/react";
import { Typography } from "@versi-ui/typography";
import { Animate } from ".";

export default {
    title: "Example/Animate",
    component: Animate.Up,
    parameters: {
        layout: "fullscreen",
    },
} as Meta<typeof Animate>;


const Template: StoryFn<typeof Animate.Up> = (args) => <Animate.Up {...args}><Typography.H1>Animate Up</Typography.H1></Animate.Up>;

export const Up = Template.bind({});

Up.args = {
    delay: 500,
};