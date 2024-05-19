import { ReactNode } from 'react';

export interface AnimateTextProps {
    children?: ReactNode | JSX.Element;
    classes?: string;
    animationFlag?: boolean;
    delay?: number;
    unmount?: boolean;
}
declare const AnimateText: {
    Interlock: ({ children, classes, animationFlag, delay }: AnimateTextProps) => import("react/jsx-runtime").JSX.Element;
};
export default AnimateText;
