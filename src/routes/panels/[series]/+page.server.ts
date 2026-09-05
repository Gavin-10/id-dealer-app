

//Sends series url param to component
export const load = ({ params }) => {
	return {
		series: params.series,
	};
}