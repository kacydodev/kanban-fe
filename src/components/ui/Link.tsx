import type { ReactNode } from 'react';
import { Link as RACLink } from 'react-aria-components';
import type { LinkProps as RACLinkProps } from 'react-aria-components';

interface LinkProps extends RACLinkProps {
	children: ReactNode;
}

export function Link({ children, ...props }: LinkProps) {
	const linkClassName =
		`
	m-2 border-b
	dark:border-buttonDark-border dark:text-buttonDark-text
	dark:hover:border-buttonDark-border-hover dark:hover:text-buttonDark-text-hover
	` + props.className;

	return (
		<RACLink {...props} className={linkClassName}>
			{children}
		</RACLink>
	);
}
