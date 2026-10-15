
import type { Actions } from "@sveltejs/kit";

export const actions = {
	updateInfo: async ({ request, fetch }) => {
		const data = await request.formData();
		const address = `${data.get('street')},${data.get('city')},${data.get('state')},${data.get('zip')}`;
		const body = {
			businessName: data.get('businessName'),
			dba: data.get('dba'),
			address: address,
		};

		const res = await fetch('/api/extauth/test', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(body),
		});
		return await res.json();
	},

	updateTier: async ({ request }) => {
		const data = await request.formData();
		console.log(data);
	}
} satisfies Actions;

export const load = async ({ locals }) => {
	return { user: locals.user };
};