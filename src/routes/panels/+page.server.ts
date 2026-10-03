
//Load function to find and send url query params to component
import { PUBLIC_API_URL } from '$env/static/public';

export const load = async ({ url }) => {
	const search = {
		market: url.searchParams.get('market'),
		group: url.searchParams.get('group'),
	};

	const data = await fetch(`${PUBLIC_API_URL}/series`, {
		headers: {
			origin: url.origin,
		}
	});
	const res = await data.json();

	return { search: search, res: res };
}