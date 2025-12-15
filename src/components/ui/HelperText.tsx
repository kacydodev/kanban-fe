import classNames from 'classnames';

interface HelperText extends React.HTMLAttributes<HTMLParagraphElement> {
	data?: string | undefined;
	variant?: 'success' | 'error' | 'warning';
}

export function HelperText({
	data = undefined,
	variant,
	...props
}: HelperText) {
	const variantClassname = {
		success: 'dark:text-uiDark-success',
		error: 'dark:text-uiDark-error',
		warning: 'dark:text-uiDark-warning',
	};

	const helperTextClassName = classNames([
		!data && 'opacity-0',
		'helper-text',
		variant && variantClassname[variant],
		props.className,
	]);

	return (
		<div className='min-h-5'>
			<p {...props} className={helperTextClassName}>
				{data}
			</p>
		</div>
	);
}
