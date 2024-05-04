import { JSX as JSX_2 } from 'react/jsx-runtime';
import { ReactNode } from 'react';

export declare const Animate: {
    Left: ({ children, classes, animationFlag, delay, defaultView }: AnimateProps) => JSX_2.Element;
    Right: ({ children, classes, animationFlag, delay, defaultView }: AnimateProps) => JSX_2.Element;
    Up: ({ children, classes, animationFlag, delay, defaultView }: AnimateProps) => JSX_2.Element;
    Down: ({ children, classes, animationFlag, delay, defaultView }: AnimateProps) => JSX_2.Element;
    Opacity: ({ children, classes, animationFlag, delay, defaultView }: AnimateProps) => JSX_2.Element;
    Scale: ({ children, classes, animationFlag, delay, defaultView }: AnimateProps) => JSX_2.Element;
};

declare interface AnimateProps {
    children?: JSX.Element | ReactNode;
    classes?: string;
    animationFlag?: boolean;
    delay?: number;
    defaultView?: boolean;
}

export { }
