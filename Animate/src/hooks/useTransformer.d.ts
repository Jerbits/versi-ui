import { TEasingDictionary } from '../components/animations';

export interface ITextAnimationConfig {
    isInterlock: boolean;
    yAxisStart: number;
}
interface IApplyTextEffect {
    element: string;
    flag: boolean;
    delay?: number;
    duration: number;
    trail: number;
    easing: TEasingDictionary;
}
export declare const useTransformer: ({ isInterlock, yAxisStart }: ITextAnimationConfig) => {
    applyTextffect: ({ element, flag, delay, duration, trail, easing }: IApplyTextEffect) => "" | import("react/jsx-runtime").JSX.Element[];
};
export {};
