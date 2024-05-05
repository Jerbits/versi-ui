import { StoryFn, Meta } from '@storybook/react';
import { Typography } from '.';

export default {
	title: 'Example/Typography',
	component: Typography.H1,
	parameters: {
		layout: 'fullscreen'
	}
} as Meta<typeof Typography>;

const H1: StoryFn<typeof Typography.H1> = (args) => <Typography.H1 {...args}>Heading 1</Typography.H1>;
const H2: StoryFn<typeof Typography.H2> = (args) => <Typography.H2 {...args}>Heading 2</Typography.H2>;
const H3: StoryFn<typeof Typography.H3> = (args) => <Typography.H3 {...args}>Heading 3</Typography.H3>;
const H4: StoryFn<typeof Typography.H4> = (args) => <Typography.H4 {...args}>Heading 4</Typography.H4>;
const H5: StoryFn<typeof Typography.H5> = (args) => <Typography.H5 {...args}>Heading 5</Typography.H5>;

export const Heading1 = H1.bind({});
Heading1.args = {};

export const Heading2 = H2.bind({});
Heading2.args = {};

export const Heading3 = H3.bind({});
Heading3.args = {};

export const Heading4 = H4.bind({});
Heading4.args = {};

export const Heading5 = H5.bind({});
Heading5.args = {};