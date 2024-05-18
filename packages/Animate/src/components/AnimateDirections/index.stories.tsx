
import { StoryFn, Meta } from "@storybook/react";
import { Typography } from "@jerbits/typography";
import { AnimateDirection } from ".";

export default {
    title: "Example/Animate/Direction",
    component: AnimateDirection.Up,
    parameters: {
        layout: "centered",
    },
} as Meta<typeof AnimateDirection>;


const AnimateUp: StoryFn<typeof AnimateDirection.Up> = (args) => <AnimateDirection.Up {...args}><Typography.H1>Animate Up</Typography.H1></AnimateDirection.Up>;
const AnimateDown: StoryFn<typeof AnimateDirection.Down> = (args) => <AnimateDirection.Down {...args}><Typography.H1>Animate Down</Typography.H1></AnimateDirection.Down>;
const AnimateLeft: StoryFn<typeof AnimateDirection.Left> = (args) => <AnimateDirection.Left {...args}><Typography.H1>Animate Left</Typography.H1></AnimateDirection.Left>;
const AnimateRight: StoryFn<typeof AnimateDirection.Right> = (args) => <AnimateDirection.Right {...args}><Typography.H1>Animate Right</Typography.H1></AnimateDirection.Right>;

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