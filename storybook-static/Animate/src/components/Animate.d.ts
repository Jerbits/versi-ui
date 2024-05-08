import { ReactNode } from '../../../../node_modules/react';

export interface AnimateProps {
    children?: JSX.Element | ReactNode;
    classes?: string;
    animationFlag?: boolean;
    delay?: number;
    unmount?: boolean;
}
declare const Animate: {
    Left: ({ children, classes, animationFlag, delay, unmount }: AnimateProps) => import("react/jsx-runtime").JSX.Element;
    Right: ({ children, classes, animationFlag, delay, unmount }: AnimateProps) => import("react/jsx-runtime").JSX.Element;
    Up: ({ children, classes, animationFlag, delay, unmount }: AnimateProps) => import("react/jsx-runtime").JSX.Element;
    Down: ({ children, classes, animationFlag, delay, unmount }: AnimateProps) => import("react/jsx-runtime").JSX.Element;
    Opacity: ({ children, classes, animationFlag, delay, unmount }: AnimateProps) => import("react/jsx-runtime").JSX.Element;
    Scale: ({ children, classes, animationFlag, delay, unmount }: AnimateProps) => import("react/jsx-runtime").JSX.Element;
};
export default Animate;
