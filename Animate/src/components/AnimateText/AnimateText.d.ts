import { ReactNode } from '../../../../../node_modules/react';

export interface AnimateTextProps {
    children?: ReactNode | JSX.Element;
    classes?: string;
    animationFlag?: boolean;
    delay?: number;
    unmount?: boolean;
}
declare const AnimateText: {
    Interlock: ({ children, classes, animationFlag, delay }: AnimateTextProps) => import("react/jsx-runtime").JSX.Element;
    ChainUp: ({ children, classes, animationFlag, delay }: AnimateTextProps) => import("react/jsx-runtime").JSX.Element;
    ChainDown: ({ children, classes, animationFlag, delay }: AnimateTextProps) => import("react/jsx-runtime").JSX.Element;
};
export default AnimateText;
