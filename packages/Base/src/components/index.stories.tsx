import { StoryFn, Meta } from '@storybook/react';
import { Base } from '.';

export default {
	title: 'Example/Base',
	component: Base,
	parameters: {
		layout: 'centered'
	}
} as Meta<typeof Base>;

const Package: StoryFn<typeof Base> = (args) => <Base {...args}>Heading 1</Base>;

export const PackageVariant = Package.bind({});
PackageVariant.args = {};
