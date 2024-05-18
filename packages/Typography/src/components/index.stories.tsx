import { StoryFn, Meta } from '@storybook/react';
import { Typography } from '.';
import { TypographyProps } from './Typography';

export default {
	title: 'Example/Typography',
	component: Typography.H1,
	parameters: {
		layout: 'centered'
	}
} as Meta<typeof Typography.H1>;

const H1: StoryFn<typeof Typography.H1> = (args) => <Typography.H1 {...args}>H1 Heading</Typography.H1>;
const H2: StoryFn<typeof Typography.H2> = (args) => <Typography.H2 {...args}>H2 Heading</Typography.H2>;
const H3: StoryFn<typeof Typography.H3> = (args) => <Typography.H3 {...args}>H3 Heading</Typography.H3>;
const H4: StoryFn<typeof Typography.H4> = (args) => <Typography.H4 {...args}>H4 Heading</Typography.H4>;
const H5: StoryFn<typeof Typography.H5> = (args) => <Typography.H5 {...args}>H5 Heading</Typography.H5>;

const GRADIENT_CSS = 'linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)'
const DEFAULT_ARGS = { classes: '', id: '' };
export const StaticGradient = H1.bind({});
StaticGradient.args = {
	...DEFAULT_ARGS,
	gradient: {
		gradientCss: GRADIENT_CSS,
		isAnimated: false
	},
	classes: 'vui-font-bold'
}

export const AnimatedGradient = H1.bind({});
AnimatedGradient.args = {
	...DEFAULT_ARGS,
	gradient: {
		gradientCss: GRADIENT_CSS,
		isAnimated: true
	},
	classes: 'vui-font-bold'
}

export const Heading1 = H1.bind({});
Heading1.args = {
	...DEFAULT_ARGS,
};
Heading1.decorators = [
	() => {
		return (
			<div className='vui-flex vui-flex-col vui-gap-5'>
				<Typography.H1 {...(Heading1.args as TypographyProps)} size='H1'>
					H1 Heading
				</Typography.H1>
				<Typography.H1 {...(Heading1.args as TypographyProps)} size='H2'>
					H1 Heading
				</Typography.H1>
				<Typography.H1 {...(Heading1.args as TypographyProps)} size='H3'>
					H1 Heading
				</Typography.H1>
				<Typography.H1 {...(Heading1.args as TypographyProps)} size='H4'>
					H1 Heading
				</Typography.H1>
				<Typography.H1 {...(Heading1.args as TypographyProps)} size='H5'>
					H1 Heading
				</Typography.H1>
				<Typography.H1 {...(Heading1.args as TypographyProps)} size='P'>
					H1 Heading
				</Typography.H1>
			</div>
		);
	}
];

export const Heading2 = H2.bind({});
Heading2.args = {
	...DEFAULT_ARGS
};
Heading2.decorators = [
	() => {
		return (
			<div className='vui-flex vui-flex-col vui-gap-5'>
				<Typography.H1 {...(Heading2.args as TypographyProps)} size='H1'>
					H2 Heading
				</Typography.H1>
				<Typography.H1 {...(Heading2.args as TypographyProps)} size='H2'>
					H2 Heading
				</Typography.H1>
				<Typography.H1 {...(Heading2.args as TypographyProps)} size='H3'>
					H2 Heading
				</Typography.H1>
				<Typography.H1 {...(Heading2.args as TypographyProps)} size='H4'>
					H2 Heading
				</Typography.H1>
				<Typography.H1 {...(Heading2.args as TypographyProps)} size='H5'>
					H2 Heading
				</Typography.H1>
				<Typography.H1 {...(Heading2.args as TypographyProps)} size='P'>
					H2 Heading
				</Typography.H1>
			</div>
		);
	}
];

export const Heading3 = H3.bind({});
Heading3.args = {
	...DEFAULT_ARGS
};
Heading3.decorators = [
	() => {
		return (
			<div className='vui-flex vui-flex-col vui-gap-5'>
				<Typography.H1 {...(Heading3.args as TypographyProps)} size='H1'>
					H3 Heading
				</Typography.H1>
				<Typography.H1 {...(Heading3.args as TypographyProps)} size='H2'>
					H3 Heading
				</Typography.H1>
				<Typography.H1 {...(Heading3.args as TypographyProps)} size='H3'>
					H3 Heading
				</Typography.H1>
				<Typography.H1 {...(Heading3.args as TypographyProps)} size='H4'>
					H3 Heading
				</Typography.H1>
				<Typography.H1 {...(Heading3.args as TypographyProps)} size='H5'>
					H3 Heading
				</Typography.H1>
				<Typography.H1 {...(Heading3.args as TypographyProps)} size='P'>
					H3 Heading
				</Typography.H1>
			</div>
		);
	}
];

export const Heading4 = H4.bind({});
Heading4.args = {
	...DEFAULT_ARGS
};
Heading4.decorators = [
	() => {
		return (
			<div className='vui-flex vui-flex-col vui-gap-5'>
				<Typography.H1 {...(Heading4.args as TypographyProps)} size='H1'>
					H4 Heading
				</Typography.H1>
				<Typography.H1 {...(Heading4.args as TypographyProps)} size='H2'>
					H4 Heading
				</Typography.H1>
				<Typography.H1 {...(Heading4.args as TypographyProps)} size='H3'>
					H4 Heading
				</Typography.H1>
				<Typography.H1 {...(Heading4.args as TypographyProps)} size='H4'>
					H4 Heading
				</Typography.H1>
				<Typography.H1 {...(Heading4.args as TypographyProps)} size='H5'>
					H4 Heading
				</Typography.H1>
				<Typography.H1 {...(Heading4.args as TypographyProps)} size='P'>
					H4 Heading
				</Typography.H1>
			</div>
		);
	}
];

export const Heading5 = H5.bind({});
Heading5.args = {
	...DEFAULT_ARGS
};
Heading5.decorators = [
	() => {
		return (
			<div className='vui-flex vui-flex-col vui-gap-5'>
				<Typography.H1 {...(Heading5.args as TypographyProps)} size='H1'>
					H5 Heading
				</Typography.H1>
				<Typography.H1 {...(Heading5.args as TypographyProps)} size='H2'>
					H5 Heading
				</Typography.H1>
				<Typography.H1 {...(Heading5.args as TypographyProps)} size='H3'>
					H5 Heading
				</Typography.H1>
				<Typography.H1 {...(Heading5.args as TypographyProps)} size='H4'>
					H5 Heading
				</Typography.H1>
				<Typography.H1 {...(Heading5.args as TypographyProps)} size='H5'>
					H5 Heading
				</Typography.H1>
				<Typography.H1 {...(Heading5.args as TypographyProps)} size='P'>
					H5 Heading
				</Typography.H1>
			</div>
		);
	}
];
