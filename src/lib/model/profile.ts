
export interface Profile {
	businessInfo: BusinessInfo,

	tier: "tier1" | "tier2" | "tier3" | "preferred",
	totalOrders: number,
	pendingOrders: number,
	activeOrders: number,
}

export interface BusinessInfo {
	businessName: string;
	dba: string;
	street: string;
	city: string;
	state: string;
	zip: string;
}