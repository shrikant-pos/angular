
import { IBillcustomerModel } from './billcustomer.model';

export interface IBillModel {

	billnumber: number;
	paymentstatus: string;
	billdate: number;
	payableamount: number;
	customerdetails?: IBillcustomerModel;
}

export function DefaultBills(): IBillModel[] {
    return []
}
