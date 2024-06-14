import { ReactNode } from 'react';

export declare const useChildren: () => {
    updateDeepestChild: <T extends JSX.Element | ReactNode>(children: T, transformer?: (element: string) => ReactNode) => T;
    transformer: ({ element, flag, delay }: {
        element: string;
        flag: boolean;
        delay?: number;
    }) => "" | import("react/jsx-runtime").JSX.Element[];
};
