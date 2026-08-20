

export const load = ({ url }) => {
	const search = {
		market: url.searchParams.get('market'),
		group: url.searchParams.get('group'),
	};

	return { search: search };
}