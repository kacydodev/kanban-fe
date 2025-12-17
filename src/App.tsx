import { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { TestPage } from './components/pages/TestPage';
import { BoardPage } from './components/pages/board/BoardPage';

export function App() {
	useEffect(() => {
		// document.documentElement.setAttribute('data-theme', 'dark');
		// document.documentElement.setAttribute('class', 'dark');
	}, []);

	return (
		<>
			<Routes>
				<Route index path='/' element={<>hi</>} />

				<Route path='/test-page' element={<TestPage />}>
					<Route path='board/:id' element={<BoardPage />} />
				</Route>
			</Routes>
		</>
	);
}
