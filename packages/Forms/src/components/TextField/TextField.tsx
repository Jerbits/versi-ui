import { ChangeEvent, FC } from 'react';
import { default as cn } from 'classnames';
import '../../index.css';

export interface TextFieldProps {
	label?: string;
	inputType: 'id' | 'hidden' | 'month' | 'number' | 'password' | 'tel' | 'text' | 'time' | 'url';
	id: string;
	placeholder?: string;
	labelClasses?: string;
	inputClasses?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: FC<TextFieldProps> = ({
	label,
	inputType,
	id,
	placeholder,
	inputClasses,
	labelClasses,
	onChange
}: TextFieldProps) => {
	const labelStyles = cn(
		'vui-block vui-pl-1 vui-text-sm vui-font-medium vui-leading-6 vui-text-gray-900',
		labelClasses
	);
	const inputStyles = cn(
		'vui-block vui-w-full vui-rounded-md vui-border-0 vui-px-2 vui-py-1.5 vui-text-gray-900 vui-shadow-sm',
		'vui-ring-1 vui-ring-gray-300 placeholder:vui-text-gray-400 focus:vui-ring-2 focus:vui-ring-inset focus:vui-ring-blue-600 sm:vui-text-sm sm:vui-leading-6',
		inputClasses
	);
	return (
		<div>
			{label && (
				<label htmlFor={id} className={labelStyles}>
					{label}
				</label>
			)}
			<div className='vui-mt-1'>
				<input
					type={inputType}
					name={id}
					id={id}
					className={inputStyles}
					placeholder={placeholder}
					onChange={(e) => {
						typeof onChange === 'function' && onChange(e);
					}}
				/>
			</div>
		</div>
	);
};
