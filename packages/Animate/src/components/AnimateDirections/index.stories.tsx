import { StoryFn, Meta } from '@storybook/react';
import { Typography } from '@jerbits/typography';
import { AnimateDirection } from '.';
import { EASING_DICTIONARY, TEasingDictionary } from '../animations';

export default {
	title: 'Example/Animate/Direction',
	component: AnimateDirection.Up,
    argTypes:  { easing: { type: "select", options: Object.keys(EASING_DICTIONARY) } },
	parameters: {
		layout: 'centered'
	}
} as Meta<typeof AnimateDirection>;

const AnimateUp: StoryFn<typeof AnimateDirection.Up> = (args) => (
	<AnimateDirection.Up {...args}>
		<Typography.H1>Animate Up</Typography.H1>
	</AnimateDirection.Up>
);
const AnimateDown: StoryFn<typeof AnimateDirection.Down> = (args) => (
	<AnimateDirection.Down {...args}>
		<Typography.H1>Animate Down</Typography.H1>
	</AnimateDirection.Down>
);
const AnimateLeft: StoryFn<typeof AnimateDirection.Left> = (args) => (
	<AnimateDirection.Left {...args}>
		<Typography.H1>Animate Left</Typography.H1>
	</AnimateDirection.Left>
);
const AnimateRight: StoryFn<typeof AnimateDirection.Right> = (args) => (
	<AnimateDirection.Right {...args}>
		<Typography.H1>Animate Right</Typography.H1>
	</AnimateDirection.Right>
);

export const AnimateUpOnView = AnimateUp.bind({});
// export const AnimateUpWithFlag = AnimateUp.bind({});

export const AnimateDownOnView = AnimateDown.bind({});
// export const AnimateDownWithFlag = AnimateDown.bind({});

export const AnimateLeftOnView = AnimateLeft.bind({});
// export const AnimateLeftWithFlag = AnimateLeft.bind({});

export const AnimateRightOnView = AnimateRight.bind({});
// export const AnimateRightWithFlag = AnimateRight.bind({});

interface IArgTypes {
	delay: number;
	duration: number;
	easing: TEasingDictionary;
}
AnimateUpOnView.args = {
	delay: 500,
	duration: 500,
	easing: 'easeOutCirc'
} as IArgTypes;

// AnimateUpWithFlag.args = {
// 	animationFlag: true
// };

AnimateDownOnView.args = {
	delay: 500,
	duration: 500,
	easing: 'easeOutCirc' as TEasingDictionary
} as IArgTypes;

// AnimateDownWithFlag.args = {
// 	animationFlag: true
// };

AnimateLeftOnView.args = {
	delay: 500,
	duration: 200,
	easing: 'easeOutCirc' as TEasingDictionary
} as IArgTypes;

// AnimateLeftWithFlag.args = {
// 	animationFlag: true
// };

AnimateRightOnView.args = {
	delay: 500,
	duration: 200,
	easing: 'easeOutCirc' as TEasingDictionary
} as IArgTypes;

// AnimateRightWithFlag.args = {
// 	animationFlag: true
// };
