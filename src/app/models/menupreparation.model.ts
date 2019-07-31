
export interface IMenupreparationModel {

	preparationtime: number;
	preparationcost: number;
	procedure: string;
	packaging: string;
	packagingtime: number;
	packagingcost: number;
}

export function DefaultMenupreparations(): IMenupreparationModel[] {
    return []
}
