import { FC, ReactNode } from 'react';

type TSize = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'P';
type TGradientOptions = {
    isAnimated?: boolean;
    gradientCss: string;
};
export interface TypographyProps {
    children: JSX.Element | ReactNode;
    classes?: string;
    id?: string;
    size?: TSize;
    gradient?: TGradientOptions;
}
declare const Typography: {
    H1: FC<TypographyProps>;
    H2: FC<TypographyProps>;
    H3: FC<TypographyProps>;
    H4: FC<TypographyProps>;
    H5: FC<TypographyProps>;
    PA: FC<TypographyProps>;
    TAGLINE: FC<TypographyProps>;
};
export default Typography;
