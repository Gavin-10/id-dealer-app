
import { type Actions, fail } from '@sveltejs/kit';

//Action to process contact form data and send to API
export const actions = {
	default: async ({ request, fetch }) => {
		const data = await request.formData();
		const body = {
			name: data.get('name'),
			email: data.get('email'),
			message: data.get('message'),
		};

		try {
			await fetch('/api/extauth/dealer-form', {
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify(body)
			});
			return;
		} catch (error) {
			return fail(500, error);
		}
	}
} satisfies Actions;

export const load = async ({ locals }) => {
	return { user: locals.user };
}