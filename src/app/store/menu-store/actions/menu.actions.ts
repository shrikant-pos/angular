import {Action} from '@ngrx/store';
import { IMenuModel } from '../../../models/menu.model';
import { IPaggingModel } from '../../../models/pagging.model';

export enum MenuActionsTypes {
	 
	Save_addmenus = '[addmenus] LOAD',
	Save_addmenusSuccess = '[addmenus] LOAD SUCCESS',
	Save_addmenusError = '[addmenus] LOAD ERROR',
  }


export class Save_addmenus implements Action {
	readonly type = MenuActionsTypes.Save_addmenus;
	constructor(public payload: {pagging:IPaggingModel}) { }	
}

export class Save_addmenusSuccess implements Action {
	readonly type = MenuActionsTypes.Save_addmenusSuccess;
	constructor(public payload: {menus: IMenuModel[] ,cnt:number}) { }	
}

export class Save_addmenusError implements Action {
	readonly type = MenuActionsTypes.Save_addmenusError;
	constructor(public error: any) {}
}
	

  export type MenuActions = Save_addmenus | Save_addmenusSuccess | Save_addmenusError 