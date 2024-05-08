import { FC } from '../../../../../node_modules/react';

export interface TextFieldProps {
    label?: string;
    inputType: 'id' | 'hidden' | 'month' | 'number' | 'password' | 'tel' | 'text' | 'time' | 'url';
    id: string;
    placeholder?: string;
    labelClasses?: string;
    inputClasses?: string;
}
export declare const TextField: FC<TextFieldProps>;
