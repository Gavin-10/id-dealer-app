

//Sends series url param to component
import type { DealerProductRetrieval } from '$lib/model/ledPanels.ts';

export const load = async ({ params, fetch }) => {
	const res = await fetch(`/api/extauth/products/${params.series}`);
	const panelData = await res.json();
	return {
		series: params.series,
		panelData: panelData as DealerProductRetrieval,
	};
}