import { useEffect } from 'react';
import { Aside } from './components/Aside';
import { Main } from './components/Main';

export function App() {
	useEffect(() => {
		document.documentElement.setAttribute('class', 'dark');
		// document.documentElement.setAttribute('class', 'light');
	}, []);

	return (
		<>
			<Aside />
			<Main />
		</>
	);
}
