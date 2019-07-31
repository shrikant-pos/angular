
export interface IBilltaxModel {

	taxcode: string;
	title: string;
	rate: number;
}

export function DefaultBilltaxs(): IBilltaxModel[] {
    return []
}
