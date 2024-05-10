import { FC, ReactNode } from 'react';
import { default as cn } from 'classnames';
import './index.css';

type TSize = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'P';

export interface TypographyProps {
	children: JSX.Element | ReactNode;
	classes?: string;
	id?: string;
	size?: TSize;
}



const STYLES_MAP = {
	H1: 'vui-text-2xl sm:vui-text-3xl lg:vui-text-6xl landscape:mobile-landscape:vui-text-lg',
	H2: 'vui-text-xl sm:vui-text-2xl lg:vui-text-5xl landscape:mobile-landscape:vui-text-lg',
	H3: 'vui-text-lg sm:vui-text-xl lg:vui-text-4xl landscape:mobile-landscape:vui-text-lg',
	H4: 'vui-text-lg sm:vui-text-xl lg:vui-text-3xl landscape:mobile-landscape:vui-text-lg',
	H5: 'vui-text-base sm:vui-text-lg lg:vui-text-2xl landscape:mobile-landscape:vui-text-lg',
	P: 'vui-text-sm sm:vui-text-base lg:vui-text-lg landscape:mobile-landscape:vui-text-lg',
} as Record<TSize, string>;

const Heading1: FC<TypographyProps> = ({ children, classes, id, size = 'H1' }: TypographyProps) => {
	const heading1styles = cn(STYLES_MAP[size], classes);
	return (
		<h1 id={id} className={heading1styles}>
			{children}
		</h1>
	);
};

const Heading2: FC<TypographyProps> = ({ children, classes, id, size = 'H2' }: TypographyProps) => {
	const heading2styles = cn(STYLES_MAP[size], classes);
	return (
		<h2 id={id} className={heading2styles}>
			{children}
		</h2>
	);
};

const Heading3: FC<TypographyProps> = ({ children, classes, id, size = 'H3' }: TypographyProps) => {
	const heading3styles = cn(STYLES_MAP[size], classes);
	return (
		<h3 id={id} className={heading3styles}>
			{children}
		</h3>
	);
};

const Heading4: FC<TypographyProps> = ({ children, classes, id, size = 'H4' }: TypographyProps) => {
	const heading4styles = cn(STYLES_MAP[size], classes);
	return (
		<h4 id={id} className={heading4styles}>
			{children}
		</h4>
	);
};

const Heading5: FC<TypographyProps> = ({ children, classes, id, size = 'H5' }: TypographyProps) => {
	const heading5styles = cn(STYLES_MAP[size], classes);
	return (
		<h5 id={id} className={heading5styles}>
			{children}
		</h5>
	);
};

const ParagraphA: FC<TypographyProps> = ({ children, classes, id, size = 'P' }: TypographyProps) => {
	const paragraphAstyles = cn(STYLES_MAP[size], classes);
	return (
		<p id={id} className={paragraphAstyles}>
			{children}
		</p>
	);
};

const Tagline: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
	const taglineStyles = cn(
		'vui-pb-10 vui-text-xs last:vui-pb-0 sm:vui-text-base md:vui-text-lg landscape:mobile-landscape:vui-text-xs',
		classes
	);
	return <p className={taglineStyles}>{children}</p>;
};

const Typography = {
	H1: Heading1,
	H2: Heading2,
	H3: Heading3,
	H4: Heading4,
	H5: Heading5,
	PA: ParagraphA,
	TAGLINE: Tagline
};

export default Typography;
