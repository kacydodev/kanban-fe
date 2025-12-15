import { Button } from './ui/Button';
import { HelperText } from './ui/HelperText';
import { Input } from './ui/Input';
import { Link } from './ui/Link';
import { DropdownMenu } from './ui/DropdownMenu';

export function Main() {
	return (
		<main className='space-y-12'>
			<Button>Outline Button</Button>
			<Link>Link Button</Link>

			<Input label='input label' placeholder='input...'>
				<HelperText data='Error 404 not found ever...' variant='error' />
			</Input>

			<DropdownMenu />
		</main>
	);
}
