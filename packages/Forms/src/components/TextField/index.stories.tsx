import { StoryFn, Meta } from '@storybook/react';
import { TextField } from '.';
import '../../index.css'
export default {
	title: 'Example/TextField',
	component: TextField,
	parameters: {
		layout: 'centered'
	}
} as Meta<typeof TextField>;

const Package: StoryFn<typeof TextField> = (args) => <TextField {...args} />;

export const TextInput = Package.bind({});
TextInput.args = {
	id: 'textInput',
	label: 'Username',
	placeholder: 'versi-ui-user',
	inputType: 'text'
};
