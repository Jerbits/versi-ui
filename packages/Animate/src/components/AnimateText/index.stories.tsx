import { StoryFn, Meta } from '@storybook/react';
import { Typography } from '@jerbits/typography';
import { AnimateText } from '.';

export default {
	title: 'Example/Animate/Text',
	component: AnimateText.Interlock,
	parameters: {
		layout: 'centered'
	}
} as Meta<typeof AnimateText>;

const Interlock: StoryFn<typeof AnimateText.Interlock> = (args) => (
	<AnimateText.Interlock {...args}>
		<Typography.H1>Interlock Text Effect</Typography.H1>
	</AnimateText.Interlock>
);

const ChainUp: StoryFn<typeof AnimateText.Interlock> = (args) => (
	<AnimateText.ChainUp {...args}>
		<Typography.H1>ChainUp Text Effect</Typography.H1>
	</AnimateText.ChainUp>
);

const ChainDown: StoryFn<typeof AnimateText.Interlock> = (args) => (
	<AnimateText.ChainDown {...args}>
		<Typography.H1>ChainDown Text Effect</Typography.H1>
	</AnimateText.ChainDown>
);

export const InterlockOnView = Interlock.bind({});
export const InterlockWithFlag = Interlock.bind({});

InterlockOnView.args = {
};

InterlockWithFlag.args = {
	animationFlag: false,
};


export const ChainUpOnView = ChainUp.bind({});
export const ChainUpWithFlag = ChainUp.bind({});

ChainUpOnView.args = {
};

ChainUpWithFlag.args = {
	animationFlag: false,
};

export const ChainDownOnView = ChainDown.bind({});
export const ChainDownWithFlag = ChainDown.bind({});

ChainDownOnView.args = {
};

ChainDownWithFlag.args = {
	animationFlag: false,
};
