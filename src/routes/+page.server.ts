
import  { type Actions, fail } from "@sveltejs/kit";

export const actions = {
	updateInfo: async ({ request, fetch }) => {
		const data = await request.formData();
		const address = `${data.get('street')},${data.get('city')},${data.get('state')},${data.get('zip')}`;
		const body = {
			name: data.get('name'),
			businessName: data.get('businessName'),
			dba: data.get('dba'),
			address: address,
		};

		try {
			const res = await fetch('/api/extauth/update-user', {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(body),
			});
			return await res.json();
		} catch (error) {
			return fail(500, error);
		}
	},

	updateTier: async ({ request, fetch }) => {
		const data = await request.formData();
		const body = {
			tier: data.get('tier'),
		};

		try {
			await fetch('/api/extauth/request-tier', {
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify(body),
			});
			return;
		} catch (error) {
			return fail(500, error);
		}
	}
} satisfies Actions;

export const load = async ({ locals }) => {
	return { user: locals.user };
};