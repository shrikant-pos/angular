
export interface ILocationModel {

	code: string;
	title: string;
	description: string;
	billnumber: number;
	payableamount: number;
	lastkoton: number;
	status: string;
	type: string;
}

export function DefaultLocations(): ILocationModel[] {
    return []
}
