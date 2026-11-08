

export interface Series {
	seriesModel: string,
	shortDescription: string,
	photo: string,
	priority: number,
	group: { group: string },
	applications: { application: string }[],
	_count: { products: number },
}

export interface ProductRetrieval {
	idModel: {
		group: {
			group: string;
		};
		seriesModel: string;
	};
	pixelPitch: {
		pitch: string;
	};
	ledType: {
		type: string;
	};
	status: {
		status: string;
	};

	partNumber: string;
	additionalDetails: object;
	hasSpecSheet: boolean;
	landedCost: number;
}

interface DescriptionRetrieval {
	text: string;
	isVerticalMarket: boolean;
	title: { title: string };
}

export interface CostCalculation {
	retailCoefficient: number;
	tierOneCoefficient: number;
	tierTwoCoefficient: number;
	tierThreeCoefficient: number;
	prefferredCoefficient: number;
}

export interface DealerProductRetrieval {
	series: string;
	photoUrl: string;
	products: ProductRetrieval[];
	description: DescriptionRetrieval[];
	costCalculation: CostCalculation;
}