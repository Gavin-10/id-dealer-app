
import type { Actions } from '@sveltejs/kit';

//Action to process contact form data and send to API
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		console.log(data);

		return { status: 200 };
	}
} satisfies Actions;