
import type { Actions } from "@sveltejs/kit";

export const actions = {
	updateInfo: async ({request}) => {
		const data = await request.formData();
		console.log(data);
	},

	updateTier: async ({ request }) => {
		const data = await request.formData();
		console.log(data);
	}
} satisfies Actions;

export const load = async ({ locals }) => {
	return { user: locals.user };
};