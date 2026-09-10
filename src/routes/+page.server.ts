
import type { Actions } from "@sveltejs/kit";

export const actions = {
	updateInfo: async ({request}) => {
		const data = await request.formData();
		console.log(data);
	},

	updateTier: async () => {
		console.log("working");
	}
} satisfies Actions;