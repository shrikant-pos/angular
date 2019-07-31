
import { IBillorderModel } from './billorder.model';
import { IBillcouponModel } from './billcoupon.model';
import { IBilltaxModel } from './billtax.model';

export interface IBilldetailsModel {

	location: string;
	billnumber: number;
	orders: IBillorderModel;
	coupons?: IBillcouponModel;
	taxes?: IBilltaxModel;
	billamount: number;
	payableamount: number;
}

export function DefaultBilldetailss(): IBilldetailsModel[] {
    return []
}
