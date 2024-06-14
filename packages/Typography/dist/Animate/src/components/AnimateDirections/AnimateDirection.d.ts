import { ReactNode } from 'react';

export interface AnimateDirectionProps {
    children?: JSX.Element | ReactNode;
    classes?: string;
    animationFlag?: boolean;
    delay?: number;
    unmount?: boolean;
}
declare const AnimateDirection: {
    Left: ({ children, classes, animationFlag, delay, unmount }: AnimateDirectionProps) => import("react/jsx-runtime").JSX.Element;
    Right: ({ children, classes, animationFlag, delay, unmount }: AnimateDirectionProps) => import("react/jsx-runtime").JSX.Element;
    Up: ({ children, classes, animationFlag, delay, unmount }: AnimateDirectionProps) => import("react/jsx-runtime").JSX.Element;
    Down: ({ children, classes, animationFlag, delay, unmount }: AnimateDirectionProps) => import("react/jsx-runtime").JSX.Element;
    Opacity: ({ children, classes, animationFlag, delay, unmount }: AnimateDirectionProps) => import("react/jsx-runtime").JSX.Element;
    Scale: ({ children, classes, animationFlag, delay, unmount }: AnimateDirectionProps) => import("react/jsx-runtime").JSX.Element;
};
export default AnimateDirection;
