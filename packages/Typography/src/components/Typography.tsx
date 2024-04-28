import { FC, ReactNode } from 'react';
import { default as cn } from 'classnames';

export interface TypographyProps {
  children?: JSX.Element | ReactNode;
  classes?: string;
}

const Heading1: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
  const heading1styles = cn(
    'zp-text-xl',
    'landscape:mobile-landscape:zp-text-xl sm:zp-text-2xl lg:zp-text-3xl zp-mb-5 md:zp-mb-5',
    classes
  );
  return <h1 className={heading1styles}>{children}</h1>;
};

const Heading2: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
  const heading2styles = cn(
    'zp-text-lg zp-font-bold',
    'landscape:mobile-landscape:zp-text-lg sm:zp-text-xl lg:zp-text-2xl zp-mb-5 md:zp-mb-5',
    classes
  );
  return <h2 className={heading2styles}>{children}</h2>;
};

const Heading3: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
  const heading3styles = cn('zp-text-lg sm:zp-text-4xl zp-font-extrabold', classes);
  return <h3 className={heading3styles}>{children}</h3>;
};

const Heading4: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
  const heading4styles = cn('zp-text-base sm:zp-text-2xl zp-font-extrabold', classes);
  return <h4 className={heading4styles}>{children}</h4>;
};

const Heading5: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
  const heading5styles = cn(
    'zp-text-2xl',
    'landscape:mobile-landscape:zp-text-lg sm:zp-text-3xl lg:zp-text-6xl',
    classes
  );
  return <h4 className={heading5styles}>{children}</h4>;
};

const ParagraphA: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
  const paragraphAstyles = cn(
    'zp-text-base landscape:mobile-landscape:zp-text-base zp-pb-5 zp- zp-max-w-[1000px]',
    classes
  );
  return <p className={paragraphAstyles}>{children}</p>;
};

const ParagraphTos: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
  const paragraphAstyles = cn(
    'zp-text-sm sm:zp-text-base landscape:mobile-landscape:zp-text-base zp-font-extrabold zp-pb-5 sm:zp-pb-10 last:zp-pb-0',
    classes
  );
  return <p className={paragraphAstyles}>{children}</p>;
};

const Tagline: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
  const taglineStyles = cn(
    'zp-text-xs sm:zp-text-base md:zp-text-lg landscape:mobile-landscape:zp-text-xs zp-font-extrabold zp-pb-10 last:zp-pb-0',
    classes
  );
  return <p className={taglineStyles}>{children}</p>;
};

// unused but will be handy later on
const Link: FC<TypographyProps> = ({ children, classes, ...rest }: TypographyProps) => {
  const linkStyles = cn('hover:zp-border-b-2 zp-border-oras-pink', classes);
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