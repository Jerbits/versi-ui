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
    'landscape:mobile-landscape:vui-text-xl sm:vui-text-2xl lg:vui-text-3xl vui-mb-5 md:vui-mb-5',
    classes
  );
  return <h1 className={heading1styles}>{children}</h1>;
};

const Heading2: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
  const heading2styles = cn(
    'vui-text-lg vui-font-bold',
    'landscape:mobile-landscape:vui-text-lg sm:vui-text-xl lg:vui-text-2xl vui-mb-5 md:vui-mb-5',
    classes
  );
  return <h2 className={heading2styles}>{children}</h2>;
};

const Heading3: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
  const heading3styles = cn('vui-text-lg sm:vui-text-4xl vui-font-extrabold', classes);
  return <h3 className={heading3styles}>{children}</h3>;
};

const Heading4: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
  const heading4styles = cn('vui-text-base sm:vui-text-2xl vui-font-extrabold', classes);
  return <h4 className={heading4styles}>{children}</h4>;
};

const Heading5: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
  const heading5styles = cn(
    'vui-text-2xl',
    'landscape:mobile-landscape:vui-text-lg sm:vui-text-3xl lg:vui-text-6xl',
    classes
  );
  return <h4 className={heading5styles}>{children}</h4>;
};

const ParagraphA: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
  const paragraphAstyles = cn(
    'vui-text-base landscape:mobile-landscape:vui-text-base vui-pb-5  vui-max-w-[1000px]',
    classes
  );
  return <p className={paragraphAstyles}>{children}</p>;
};

const ParagraphTos: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
  const paragraphAstyles = cn(
    'vui-text-sm sm:vui-text-base landscape:mobile-landscape:vui-text-base vui-font-extrabold vui-pb-5 sm:vui-pb-10 last:vui-pb-0',
    classes
  );
  return <p className={paragraphAstyles}>{children}</p>;
};

const Tagline: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
  const taglineStyles = cn(
    'vui-text-xs sm:vui-text-base md:vui-text-lg landscape:mobile-landscape:vui-text-xs vui-font-extrabold vui-pb-10 last:vui-pb-0',
    classes
  );
  return <p className={taglineStyles}>{children}</p>;
};

// unused but will be handy later on
const Link: FC<TypographyProps> = ({ children, classes, ...rest }: TypographyProps) => {
  const linkStyles = cn('hover:vui-border-b-2 vui-border-oras-pink', classes);
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

export default Typography