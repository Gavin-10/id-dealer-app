
//Load function to find and send url query params to component
export const load = ({ url }) => {
	const search = {
		market: url.searchParams.get('market'),
		group: url.searchParams.get('group'),
	};

	return { search: search };
}