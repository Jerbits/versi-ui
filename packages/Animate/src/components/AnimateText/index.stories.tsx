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
		<Typography.H1><div><div>Interlock Text Effect</div></div></Typography.H1>
	</AnimateText.Interlock>
);

export const InterlockOnView = Interlock.bind({});
export const InterlockWithFlag = Interlock.bind({});

Interlock.args = {
	delay: 500
};
