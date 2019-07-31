
export interface IBillorderModel {

	menucode: string;
	menutitle: string;
	rate: number;
	quantity: number;
	kot: number;
}

export function DefaultBillorders(): IBillorderModel[] {
    return []
}
