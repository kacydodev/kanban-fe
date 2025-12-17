import classNames from 'classnames';
import data from '../data.json';
import { Link } from 'react-router';
import { ListBox, ListBoxItem } from 'react-aria-components';

export function Sidebar() {
	const boards = data.boards;

	const sidebarClassName = classNames([
		'w-72',
		'bg-sidebar-background text-sidebar-label ',
	]);

	const sidebarItemClassName = classNames([
		// 'block py-4 cursor-pointer',
		'dark:hover:bg-uiDark-background-hover',
		'hover:bg-sidebar-background-hover active:bg-sidebar-background-active',
		'data-selected:bg-sidebar-background-active data-selected:text-sidebar-label-active',
	]);

	return (
		<ListBox selectionMode='single' items={boards} className={sidebarClassName}>
			{boards.map((board) => (
				<ListBoxItem key={`board-${board.id}`} className={sidebarItemClassName}>
					<Link to={`board/${board.id}`} className='block py-4 cursor-pointer'>
						{board.name}
					</Link>
				</ListBoxItem>
			))}
		</ListBox>
	);

	return (
		<aside>
			<p>Logo</p>
			<ul>
				{boards.map((board) => (
					<li key={`board-${board.id}`}>
						{/* <Link to={`board/${board.id}`} className={tabClassName}> */}
						<select value='hi' className={sidebarItemClassName}>
							{board.name}
						</select>
					</li>
				))}
			</ul>
		</aside>
	);
}
