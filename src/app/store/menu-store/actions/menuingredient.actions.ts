import {Action} from '@ngrx/store';
import { IMenuingredientModel } from '../../../models/menuingredient.model';
import { IPaggingModel } from '../../../models/pagging.model';

export enum MenuingredientActionsTypes {
	 
	Save_addmenuingredients = '[addmenuingredients] LOAD',
	Save_addmenuingredientsSuccess = '[addmenuingredients] LOAD SUCCESS',
	Save_addmenuingredientsError = '[addmenuingredients] LOAD ERROR',
  }


export class Save_addmenuingredients implements Action {
	readonly type = MenuingredientActionsTypes.Save_addmenuingredients;
	constructor(public payload: {pagging:IPaggingModel}) { }	
}

export class Save_addmenuingredientsSuccess implements Action {
	readonly type = MenuingredientActionsTypes.Save_addmenuingredientsSuccess;
	constructor(public payload: {menuingredients: IMenuingredientModel[] ,cnt:number}) { }	
}

export class Save_addmenuingredientsError implements Action {
	readonly type = MenuingredientActionsTypes.Save_addmenuingredientsError;
	constructor(public error: any) {}
}
	

  export type MenuingredientActions = Save_addmenuingredients | Save_addmenuingredientsSuccess | Save_addmenuingredientsError 