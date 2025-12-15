import classNames from 'classnames';
import type { ReactNode } from 'react';
import { Button as RACButton } from 'react-aria-components';
import type { ButtonProps as RACButtonProps } from 'react-aria-components';

interface ButtonProps extends RACButtonProps {
	variant?: 'outline';
	children: ReactNode;
}

export function Button({
	variant = 'outline',
	children,
	...props
}: ButtonProps) {
	const buttonClassName = classNames(
		[
			'p-2 rounded cursor-pointer',
			'[&_svg]:inline-block',
			'label-uppercase',

			variant === 'outline' &&
				`
    dark:border dark:border-buttonDark-border dark:text-buttonDark-text
    dark:hover:border-buttonDark-border-hover dark:hover:text-buttonDark-text-hover
    `,
		],
		props.className,
	);

	// if(variant === 'link') <Link

	return (
		<RACButton {...props} className={buttonClassName}>
			{children}
		</RACButton>
	);
}
