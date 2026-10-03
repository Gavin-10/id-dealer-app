
import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { PUBLIC_API_URL } from '$env/static/public';

export const fallback: RequestHandler = async ({ request, url }) => {
	const api = new URL(url.pathname, PUBLIC_API_URL);
	api.search = url.search;

	const headers = new Headers(request.headers);
	headers.delete('host');

	try {
		const res = await fetch(api.toString(), {
			method: request.method,
			headers: headers,
			body: request.body,
			duplex: 'half',
		});

		return new Response(res.body, {
			status: res.status,
			statusText: res.statusText,
			headers: res.headers,
		});

	} catch (e) {
		console.error('Proxy error:', e);
		throw error(502, 'Bad Gateway: Could not reach API');
	}
}
