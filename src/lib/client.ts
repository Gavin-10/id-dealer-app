
import { createAuthClient } from 'better-auth/svelte';
import { PUBLIC_FRONTEND_URL } from '$env/static/public';

export const authClient = createAuthClient({
	baseURL: `${PUBLIC_FRONTEND_URL}/api/auth`,
});