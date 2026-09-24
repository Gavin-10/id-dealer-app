
import { authClient } from '$lib/client.ts';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	try {
		if (event.locals.user && event.locals.session) return resolve(event);

		const { data } = await authClient.getSession();

		event.locals.user = data?.user || null;
		event.locals.session = data?.session || null;
		event.locals.error = false;
	} catch {
		event.locals.user = null;
		event.locals.session = null;
		event.locals.error = true;
	}

	return resolve(event);
}