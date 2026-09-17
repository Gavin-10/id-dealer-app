

export interface Series {
	seriesModel: string,
	shortDescription: string,
	photo: string,
	priority: number,
	group: { group: string },
	applications: { application: string }[],
	_count: { products: number },
}