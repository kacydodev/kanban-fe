import { useEffect } from 'react';
import { Aside } from './components/Aside';
import { Main } from './components/Main';

export function App() {
	useEffect(() => {
		document.documentElement.setAttribute('data-theme', 'dark');
		// document.documentElement.setAttribute('class', 'dark');
	}, []);

	return (
		<>
			<Aside />
			<Main />
		</>
	);
}
