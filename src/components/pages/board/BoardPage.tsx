import { useParams } from 'react-router';
import { Main } from '../../Main';

export function BoardPage() {
	const { id } = useParams();
	if (id === '0') return <Main />;

	return (
		<main>
			<p>{id}</p>
		</main>
	);
}
