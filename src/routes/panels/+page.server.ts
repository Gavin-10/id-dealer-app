
//Load function to find and send url query params to component
export const load = async ({ url }) => {
	const search = {
		market: url.searchParams.get('market'),
		group: url.searchParams.get('group'),
	};

	const data = await fetch('http://localhost:3000/series', {
		headers: {
			'Origin': 'http://localhost:5173',
		}
	});
	const res = await data.json();

	return { search: search, res: res };
}