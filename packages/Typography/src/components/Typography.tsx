import { FC, ReactNode } from 'react';
import { default as cn } from 'classnames';
import './index.css';

export interface TypographyProps {
  children?: JSX.Element | ReactNode;
  classes?: string;
}

const Heading1: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
  const heading1styles = cn(
    'text-xl',
    'landscape:mobile-landscape:text-xl sm:text-2xl lg:text-3xl mb-5 md:mb-5',
    classes
  );
  return <h1 className={heading1styles}>{children}</h1>;
};

const Heading2: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
  const heading2styles = cn(
    'text-lg font-bold',
    'landscape:mobile-landscape:text-lg sm:text-xl lg:text-2xl mb-5 md:mb-5',
    classes
  );
  return <h2 className={heading2styles}>{children}</h2>;
};

const Heading3: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
  const heading3styles = cn('text-lg sm:text-4xl font-extrabold', classes);
  return <h3 className={heading3styles}>{children}</h3>;
};

const Heading4: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
  const heading4styles = cn('text-base sm:text-2xl font-extrabold', classes);
  return <h4 className={heading4styles}>{children}</h4>;
};

const Heading5: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
  const heading5styles = cn(
    'text-2xl',
    'landscape:mobile-landscape:text-lg sm:text-3xl lg:text-6xl',
    classes
  );
  return <h4 className={heading5styles}>{children}</h4>;
};

const ParagraphA: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
  const paragraphAstyles = cn(
    'text-base landscape:mobile-landscape:text-base pb-5  max-w-[1000px]',
    classes
  );
  return <p className={paragraphAstyles}>{children}</p>;
};

const ParagraphTos: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
  const paragraphAstyles = cn(
    'text-sm sm:text-base landscape:mobile-landscape:text-base font-extrabold pb-5 sm:pb-10 last:pb-0',
    classes
  );
  return <p className={paragraphAstyles}>{children}</p>;
};

const Tagline: FC<TypographyProps> = ({ children, classes }: TypographyProps) => {
  const taglineStyles = cn(
    'text-xs sm:text-base md:text-lg landscape:mobile-landscape:text-xs font-extrabold pb-10 last:pb-0',
    classes
  );
  return <p className={taglineStyles}>{children}</p>;
};

// unused but will be handy later on
const Link: FC<TypographyProps> = ({ children, classes, ...rest }: TypographyProps) => {
  const linkStyles = cn('hover:border-b-2 border-oras-pink', classes);
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