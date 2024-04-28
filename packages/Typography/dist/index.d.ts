import { FC } from 'react';
import { ReactNode } from 'react';

export declare const Typography: {
    H1: FC<TypographyProps>;
    H2: FC<TypographyProps>;
    H3: FC<TypographyProps>;
    H4: FC<TypographyProps>;
    H5: FC<TypographyProps>;
    PA: FC<TypographyProps>;
    TOS: FC<TypographyProps>;
    TAGLINE: FC<TypographyProps>;
    LINK: FC<TypographyProps>;
};

declare interface TypographyProps {
    children?: JSX.Element | ReactNode;
    classes?: string;
}

export { }
