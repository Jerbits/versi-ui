import { StoryFn, Meta } from '@storybook/react';
import { Candy } from '.';

export default {
	title: 'Example/Candy',
	component: Candy,
	parameters: {
		layout: 'fullscreen'
	}
} as Meta<typeof Candy>;

const Package: StoryFn<typeof Candy> = (args) => <Candy {...args}>Heading 1</Candy>;

export const PackageVariant = Package.bind({});
PackageVariant.args = {};
