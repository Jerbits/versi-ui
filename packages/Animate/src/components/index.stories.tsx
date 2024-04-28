
import { StoryFn, Meta } from "@storybook/react";
import { Animate } from ".";

export default {
    title: "Example/Animate",
    component: Animate.Up,
    parameters: {
        layout: "fullscreen",
    },
} as Meta<typeof Animate>;


const Template: StoryFn<typeof Animate.Up> = (args) => <Animate.Up {...args}>Animated Up</Animate.Up>;

export const Up = Template.bind({});

Up.args = {
    delay: 500,
};