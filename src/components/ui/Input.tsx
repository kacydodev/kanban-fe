import type { ReactNode } from 'react';
import {
	TextField as RACTextField,
	Label as RACLabel,
	Input as RACInput,
} from 'react-aria-components';
import type { InputProps as RACInputProps } from 'react-aria-components';

interface InputProps extends RACInputProps {
	label?: string | undefined;
	children?: ReactNode;
}

export function Input({ label = undefined, children, ...props }: InputProps) {
	// TODO: how to prioritise and overrite injected classes
	// const widthClassName = /\bw-[\w-]*\b/g;

	const inputClassName =
		`
  min-w-64 p-1 rounded
  after:content-['hi'] after:h-5 after:w-full after:border after:border-debug
  dark:border dark:border-uiDark-border
  ` + props.className;

	return (
		<RACTextField className='flex flex-col w-fit [&_.helper-text]:text-right'>
			<RACLabel className='label-capitalize'>{label}</RACLabel>
			<RACInput {...props} className={inputClassName} />
			{children}
		</RACTextField>
	);
}
