
import { IMenutypeModel } from './menutype.model';
import { IMenuingredientModel } from './menuingredient.model';
import { IMenupreparationModel } from './menupreparation.model';

export interface IMenudetailModel {

	code: string;
	title: string;
	rate: number;
	active: boolean;
	images: string;
	type: IMenutypeModel;
	ingredients?: IMenuingredientModel;
	toppings?: IMenuingredientModel;
	wastage: number;
	quantity: number;
	maxquantity: number;
	unit: string;
	preparationdetails?: IMenupreparationModel;
}

export function DefaultMenudetails(): IMenudetailModel[] {
    return []
}
