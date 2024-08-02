import { ReactNode } from '../../../../../node_modules/react';
import { TEasingDictionary } from '../animations';

export interface AnimateTextProps {
    children?: ReactNode | JSX.Element;
    classes?: string;
    animationFlag?: boolean;
    delay?: number;
    unmount?: boolean;
    duration?: number;
    trail?: number;
    easing?: TEasingDictionary;
}
declare const AnimateText: {
    Interlock: ({ children, classes, animationFlag, delay, duration, trail, easing }: AnimateTextProps) => import("react/jsx-runtime").JSX.Element;
    ChainUp: ({ children, classes, animationFlag, delay, duration, trail, easing }: AnimateTextProps) => import("react/jsx-runtime").JSX.Element;
    ChainDown: ({ children, classes, animationFlag, delay, duration, trail, easing }: AnimateTextProps) => import("react/jsx-runtime").JSX.Element;
};
export default AnimateText;
