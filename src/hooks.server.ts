
import { authClient } from '$lib/client';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	try {
		const { data } = await authClient.getSession({
			fetchOptions: {
				headers: {
					cookie: event.request.headers.get('cookie') ?? '',
				}
			}
		});

		event.locals.user = data?.user || null;
		event.locals.session = data?.session || null;
		event.locals.error = false;
	} catch {
		event.locals.user = null;
		event.locals.session = null;
		event.locals.error = true;
	}

	const atLogin = event.url.pathname === '/login';

	if (!event.locals.session && !atLogin) {
		throw redirect(302, '/login');
	}

	if (event.locals.session && atLogin) {
		throw redirect(302, '/');
	}

	return resolve(event);
}