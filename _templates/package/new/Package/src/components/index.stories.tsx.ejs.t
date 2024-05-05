---
to: packages/<%= h.capitalize(name) %>/src/components/index.stories.tsx
---
import { StoryFn, Meta } from '@storybook/react';
import { <%= h.capitalize(name) %> } from '.';

export default {
	title: 'Example/<%= h.capitalize(name) %>',
	component: <%= h.capitalize(name) %>,
	parameters: {
		layout: 'fullscreen'
	}
} as Meta<typeof <%= h.capitalize(name) %>>;

const Package: StoryFn<typeof <%= h.capitalize(name) %>> = (args) => <<%= h.capitalize(name) %> {...args}>Heading 1</<%= h.capitalize(name) %>>;

export const PackageVariant = Package.bind({});
PackageVariant.args = {};
