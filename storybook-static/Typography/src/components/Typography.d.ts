import { FC, ReactNode } from '../../../../node_modules/react';

export interface TypographyProps {
    children: JSX.Element | ReactNode;
    classes?: string;
    id?: string;
}
declare const Typography: {
    H1: FC<TypographyProps>;
    H2: FC<TypographyProps>;
    H3: FC<TypographyProps>;
    H4: FC<TypographyProps>;
    H5: FC<TypographyProps>;
    PA: FC<TypographyProps>;
    TAGLINE: FC<TypographyProps>;
    LINK: FC<TypographyProps>;
};
export default Typography;
