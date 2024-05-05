import { FC, ReactNode } from 'react';
import { default as cn } from 'classnames';
import './index.css';

export interface TypographyProps {
	children?: JSX.Element | ReactNode;
	classes?: string;
}

const Heading1: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
	const heading1styles = cn(
		'vui-text-xl',
		'vui-mb-5 sm:vui-text-2xl md:vui-mb-5 lg:vui-text-3xl landscape:mobile-landscape:vui-text-xl',
		classes
	);
	return <h1 className={heading1styles}>{children}</h1>;
};

const Heading2: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
	const heading2styles = cn(
		'vui-text-lg vui-font-bold',
		'vui-mb-5 sm:vui-text-xl md:vui-mb-5 lg:vui-text-2xl landscape:mobile-landscape:vui-text-lg',
		classes
	);
	return <h2 className={heading2styles}>{children}</h2>;
};

const Heading3: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
	const heading3styles = cn('vui-text-lg vui-font-extrabold sm:vui-text-4xl', classes);
	return <h3 className={heading3styles}>{children}</h3>;
};

const Heading4: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
	const heading4styles = cn('vui-text-base vui-font-extrabold sm:vui-text-2xl', classes);
	return <h4 className={heading4styles}>{children}</h4>;
};

const Heading5: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
	const heading5styles = cn(
		'vui-text-2xl',
		'sm:vui-text-3xl lg:vui-text-6xl landscape:mobile-landscape:vui-text-lg',
		classes
	);
	return <h4 className={heading5styles}>{children}</h4>;
};

const ParagraphA: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
	const paragraphAstyles = cn(
		'vui-max-w-[1000px] vui-pb-5 vui-text-base  landscape:mobile-landscape:vui-text-base',
		classes
	);
	return <p className={paragraphAstyles}>{children}</p>;
};

const ParagraphTos: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
	const paragraphAstyles = cn(
		'vui-pb-5 vui-text-sm vui-font-extrabold last:vui-pb-0 sm:vui-pb-10 sm:vui-text-base landscape:mobile-landscape:vui-text-base',
		classes
	);
	return <p className={paragraphAstyles}>{children}</p>;
};

const Tagline: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
	const taglineStyles = cn(
		'vui-pb-10 vui-text-xs vui-font-extrabold last:vui-pb-0 sm:vui-text-base md:vui-text-lg landscape:mobile-landscape:vui-text-xs',
		classes
	);
	return <p className={taglineStyles}>{children}</p>;
};

// unused but will be handy later on
const Link: FC<TypographyProps> = ({ children, classes, ...rest }: TypographyProps) => {
	const linkStyles = cn('vui-border-oras-pink hover:vui-border-b-2', classes);
	return (
		<a {...rest} className={linkStyles}>
			{children}
		</a>
	);
};

const Typography = {
	H1: Heading1,
	H2: Heading2,
	H3: Heading3,
	H4: Heading4,
	H5: Heading5,
	PA: ParagraphA,
	TOS: ParagraphTos,
	TAGLINE: Tagline,
	LINK: Link
};

export default Typography;
