export interface ITextAnimationConfig {
    isInterlock: boolean;
    yAxisStart: number;
}
export declare const useTransformer: ({ isInterlock, yAxisStart }: ITextAnimationConfig) => {
    applyTextffect: ({ element, flag, delay }: {
        element: string;
        flag: boolean;
        delay?: number;
    }) => "" | import("react/jsx-runtime").JSX.Element[];
};
