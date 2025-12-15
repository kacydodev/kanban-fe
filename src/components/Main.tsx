import { MenuTrigger, Popover, Menu, MenuItem } from 'react-aria-components';
import { Button } from './ui/Button';
import { HelperText } from './ui/HelperText';
import { Input } from './ui/Input';
import { Link } from './ui/Link';
import { HamburgerIcon } from '@phosphor-icons/react';

export function Main() {
	return (
		<main className='space-y-12'>
			<Button>Outline Button</Button>
			<Link>Link Button</Link>

			<Input label='input label' placeholder='input...'>
				<HelperText data='Error 404 not found ever...' variant='error' />
			</Input>

			{/* TODO: refactor into new component */}
			<MenuTrigger>
				<Button aria-label='Menu'>
					<HamburgerIcon />
				</Button>
				<Popover>
					<Menu>
						<MenuItem onAction={() => alert('open')}>Open</MenuItem>
						<MenuItem onAction={() => alert('rename')}>Rename…</MenuItem>
						<MenuItem onAction={() => alert('duplicate')}>Duplicate</MenuItem>
						<MenuItem onAction={() => alert('share')}>Share…</MenuItem>
						<MenuItem onAction={() => alert('delete')}>Delete…</MenuItem>
					</Menu>
				</Popover>
			</MenuTrigger>
		</main>
	);
}
