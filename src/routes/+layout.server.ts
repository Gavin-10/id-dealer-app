
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, url }) => {
	const atLogin = url.pathname === '/login';

	if (!locals.session && !atLogin) {
		throw redirect(302, '/login');
	}

	if (locals.session && atLogin) {
		throw redirect(302, '/');
	}

	return {
		session: locals.session,
		user: locals.user,
	};
}

