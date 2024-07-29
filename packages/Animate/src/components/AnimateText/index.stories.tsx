import { StoryFn, Meta } from '@storybook/react';
import { Typography } from '@jerbits/typography';
import { AnimateText } from '.';
import { EASING_DICTIONARY, TEasingDictionary } from '../animations';

export default {
	title: 'Example/Animate/Text',
	component: AnimateText.Interlock,
	argTypes: { easing: { type: 'select', options: Object.keys(EASING_DICTIONARY) } },
	parameters: {
		layout: 'centered'
	}
} as Meta<typeof AnimateText>;

const defaultArgs = {
	duration: 200,
	trail: 100,
	easing: 'linear' as TEasingDictionary
};

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

InterlockOnView.args = { ...defaultArgs };

export const ChainUpOnView = ChainUp.bind({});

ChainUpOnView.args = { ...defaultArgs };

export const ChainDownOnView = ChainDown.bind({});

ChainDownOnView.args = { ...defaultArgs };
