import { ReactNode } from '../../../../node_modules/react';

export declare const useChildren: () => {
    updateDeepestChild: <T extends ReactNode | JSX.Element>(children: T, transformer?: (element: string) => ReactNode) => T;
    transformer: ({ element, flag, delay }: {
        element: string;
        flag: boolean;
        delay?: number;
    }) => "" | import("react/jsx-runtime").JSX.Element[];
};
