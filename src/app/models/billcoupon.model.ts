
export interface IBillcouponModel {

	couponcode: string;
	rate: number;
	title: string;
	ispercent: boolean;
}

export function DefaultBillcoupons(): IBillcouponModel[] {
    return []
}
