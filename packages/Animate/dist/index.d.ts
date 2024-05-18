import { JSX as JSX_2 } from 'react/jsx-runtime';
import { ReactNode } from 'react';

export declare const AnimateDirection: {
    Left: ({ children, classes, animationFlag, delay, unmount }: AnimateDirectionProps) => JSX_2.Element;
    Right: ({ children, classes, animationFlag, delay, unmount }: AnimateDirectionProps) => JSX_2.Element;
    Up: ({ children, classes, animationFlag, delay, unmount }: AnimateDirectionProps) => JSX_2.Element;
    Down: ({ children, classes, animationFlag, delay, unmount }: AnimateDirectionProps) => JSX_2.Element;
    Opacity: ({ children, classes, animationFlag, delay, unmount }: AnimateDirectionProps) => JSX_2.Element;
    Scale: ({ children, classes, animationFlag, delay, unmount }: AnimateDirectionProps) => JSX_2.Element;
};

declare interface AnimateDirectionProps {
    children?: JSX.Element | ReactNode;
    classes?: string;
    animationFlag?: boolean;
    delay?: number;
    unmount?: boolean;
}

export declare const AnimateText: {
    Left: ({ children, classes, animationFlag, delay, unmount }: AnimateTextionProps) => JSX_2.Element;
    Right: ({ children, classes, animationFlag, delay, unmount }: AnimateTextionProps) => JSX_2.Element;
    Up: ({ children, classes, animationFlag, delay, unmount }: AnimateTextionProps) => JSX_2.Element;
    Down: ({ children, classes, animationFlag, delay, unmount }: AnimateTextionProps) => JSX_2.Element;
    Opacity: ({ children, classes, animationFlag, delay, unmount }: AnimateTextionProps) => JSX_2.Element;
    Scale: ({ children, classes, animationFlag, delay, unmount }: AnimateTextionProps) => JSX_2.Element;
};

declare interface AnimateTextionProps {
    children?: JSX.Element | ReactNode;
    classes?: string;
    animationFlag?: boolean;
    delay?: number;
    unmount?: boolean;
}

export { }
