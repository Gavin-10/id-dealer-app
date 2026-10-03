
import { authClient } from '$lib/client';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/api')) {
		return resolve(event);
	}

	try {
		const { data } = await authClient.getSession({
			fetchOptions: {
				fetch: event.fetch,
				headers: {
					cookie: event.request.headers.get('cookie') ?? '',
					origin: event.url.origin,
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

	const atLogin = event.route.id === '/login';

	if (!event.locals.session && !atLogin) {
		throw redirect(302, '/login');
	}

	if (event.locals.session && atLogin) {
		throw redirect(302, '/');
	}

	return resolve(event);
}