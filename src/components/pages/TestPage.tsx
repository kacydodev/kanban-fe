import { Outlet } from 'react-router';
import { Sidebar } from '../Sidebar';

export function TestPage() {
	return (
		<>
			<Sidebar />
			<Outlet />
		</>
	);
}
