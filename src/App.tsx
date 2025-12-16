import { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { TestPage } from './components/pages/TestPage';

export function App() {
	useEffect(() => {
		document.documentElement.setAttribute('data-theme', 'dark');
		// document.documentElement.setAttribute('class', 'dark');
	}, []);

	return (
		<>
			<Routes>
				<Route index path='/' element={<>hi</>} />

				<Route path='/test-page' element={<TestPage />} />
			</Routes>
		</>
	);
}
