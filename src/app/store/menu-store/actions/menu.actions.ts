import {Action} from '@ngrx/store';
import { IMenuModel } from '../../../models/menu.model';
import { IPaggingModel } from '../../../models/pagging.model';

export enum MenuActionsTypes {
	 
	Load_getmenus_title = '[getmenus_title] LOAD',
	Load_getmenus_titleSuccess = '[getmenus_title] LOAD SUCCESS',
	Load_getmenus_titleError = '[getmenus_title] LOAD ERROR',
  }


export class Load_getmenus_title implements Action {
	readonly type = MenuActionsTypes.Load_getmenus_title;
	constructor(public payload: {title,pagging:IPaggingModel}) { }	
}

export class Load_getmenus_titleSuccess implements Action {
	readonly type = MenuActionsTypes.Load_getmenus_titleSuccess;
	constructor(public payload: {menus: IMenuModel[] ,cnt:number}) { }	
}

export class Load_getmenus_titleError implements Action {
	readonly type = MenuActionsTypes.Load_getmenus_titleError;
	constructor(public error: any) {}
}
	

  export type MenuActions = Load_getmenus_title | Load_getmenus_titleSuccess | Load_getmenus_titleError 