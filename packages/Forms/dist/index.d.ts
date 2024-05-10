import { ChangeEvent } from 'react';
import { FC } from 'react';

export declare const TextField: FC<TextFieldProps>;

declare interface TextFieldProps {
    label?: string;
    inputType: 'id' | 'hidden' | 'month' | 'number' | 'password' | 'tel' | 'text' | 'time' | 'url';
    id: string;
    placeholder?: string;
    labelClasses?: string;
    inputClasses?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export { }
