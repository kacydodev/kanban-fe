import { CaretRightIcon } from '@phosphor-icons/react';
import { Button } from './Button';
import { MenuTrigger, Popover, Menu, MenuItem } from 'react-aria-components';

export function DropdownMenu() {
	return (
		<MenuTrigger>
			<Button aria-label='Menu'>
				{/* <DotsThreeOutlineIcon weight='fill' size={24} /> */}
				{/* <DotsThreeOutlineVerticalIcon weight='fill' size={24} /> */}
				Options <CaretRightIcon weight='bold' size={18} />
			</Button>
			<Popover>
				<Menu className='w-42 rounded shadow-lg dark:bg-uiDark-background-muted'>
					<MenuItem
						className='p-2 dark:hover:bg-dropdownDark-label-background-hover dark:hover:text-dropdownDark-label-hover cursor-pointer'
						onAction={() => alert('open')}>
						Open
					</MenuItem>
					<MenuItem
						className='p-2 dark:hover:bg-dropdownDark-label-background-hover dark:hover:text-dropdownDark-label-hover cursor-pointer'
						onAction={() => alert('rename')}>
						Rename…
					</MenuItem>
					<MenuItem
						className='p-2 dark:hover:bg-dropdownDark-label-background-hover dark:hover:text-dropdownDark-label-hover cursor-pointer'
						onAction={() => alert('duplicate')}>
						Duplicate
					</MenuItem>
					<MenuItem
						className='p-2 dark:hover:bg-dropdownDark-label-background-hover dark:hover:text-dropdownDark-label-hover cursor-pointer'
						onAction={() => alert('share')}>
						Share…
					</MenuItem>
					<MenuItem
						className='p-2 dark:hover:bg-dropdownDark-label-background-hover dark:hover:text-dropdownDark-label-hover cursor-pointer'
						onAction={() => alert('delete')}>
						Delete…
					</MenuItem>
				</Menu>
			</Popover>
		</MenuTrigger>
	);
}
