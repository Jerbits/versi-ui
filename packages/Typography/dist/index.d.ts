import { FC } from 'react';
import { ReactNode } from 'react';

declare type TSize = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'P';

export declare const Typography: {
    H1: FC<TypographyProps>;
    H2: FC<TypographyProps>;
    H3: FC<TypographyProps>;
    H4: FC<TypographyProps>;
    H5: FC<TypographyProps>;
    PA: FC<TypographyProps>;
    TAGLINE: FC<TypographyProps>;
};

declare interface TypographyProps {
    children: JSX.Element | ReactNode;
    classes?: string;
    id?: string;
    size?: TSize;
    gradient?: string;
}

export { }
