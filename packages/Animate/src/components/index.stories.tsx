
import { StoryFn, Meta } from "@storybook/react";
import { Typography } from "@jerbits/typography";
import { Animate } from ".";

export default {
    title: "Example/Animate",
    component: Animate.Up,
    parameters: {
        layout: "centered",
    },
} as Meta<typeof Animate>;


const AnimateUp: StoryFn<typeof Animate.Up> = (args) => <Animate.Up {...args}><Typography.H1>Animate Up</Typography.H1></Animate.Up>;
const AnimateDown: StoryFn<typeof Animate.Down> = (args) => <Animate.Down {...args}><Typography.H1>Animate Down</Typography.H1></Animate.Down>;
const AnimateLeft: StoryFn<typeof Animate.Left> = (args) => <Animate.Left {...args}><Typography.H1>Animate Left</Typography.H1></Animate.Left>;
const AnimateRight: StoryFn<typeof Animate.Right> = (args) => <Animate.Right {...args}><Typography.H1>Animate Right</Typography.H1></Animate.Right>;

export const AnimateUpOnView = AnimateUp.bind({});
export const AnimateUpWithFlag = AnimateUp.bind({});

export const AnimateDownOnView = AnimateDown.bind({});
export const AnimateDownWithFlag = AnimateDown.bind({});

export const AnimateLeftOnView = AnimateLeft.bind({});
export const AnimateLeftWithFlag = AnimateLeft.bind({});

export const AnimateRightOnView = AnimateRight.bind({});
export const AnimateRightWithFlag = AnimateRight.bind({});

AnimateUpOnView.args = {
    delay: 500,
};

AnimateUpWithFlag.args = {
    animationFlag: true,
};

AnimateDownOnView.args = {
    delay: 500,
};

AnimateDownWithFlag.args = {
    animationFlag: true,
};

AnimateLeftOnView.args = {
    delay: 500,
};

AnimateLeftWithFlag.args = {
    animationFlag: true,
};

AnimateRightOnView.args = {
    delay: 500,
};

AnimateRightWithFlag.args = {
    animationFlag: true,
};