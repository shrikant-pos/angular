
import { IMenutypeModel } from './menutype.model';

export interface IMenuModel {

	code: string;
	title: string;
	rate: number;
	active: boolean;
	type: IMenutypeModel;
	quantity: number;
	maxquantity: number;
	unit: string;
}

export function DefaultMenus(): IMenuModel[] {
    return []
}
