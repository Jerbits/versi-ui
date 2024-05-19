import { ChangeEvent, FC } from 'react';

export interface TextFieldProps {
    label?: string;
    inputType: 'id' | 'hidden' | 'month' | 'number' | 'password' | 'tel' | 'text' | 'time' | 'url';
    id: string;
    placeholder?: string;
    labelClasses?: string;
    inputClasses?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export declare const TextField: FC<TextFieldProps>;
