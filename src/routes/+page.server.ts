
import type { Actions } from "@sveltejs/kit";
import { authClient } from '$lib/client.ts';

export const actions = {
	updateInfo: async ({ request, fetch, url }) => {
		const data = await request.formData();
		const address = `${data.get('street')}, ${data.get('city')}, $${data.get('state')}, $${data.get('zip')}`;
		const res = await fetch('/api/extauth/test');
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