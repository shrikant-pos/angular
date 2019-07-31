
export interface IMenuingredientModel {

	ingredientcode: string;
	title: string;
	quantity: number;
	rate: number;
	wastage: number;
	unitcode: string;
}

export function DefaultMenuingredients(): IMenuingredientModel[] {
    return []
}
