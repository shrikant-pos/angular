import {Action} from '@ngrx/store';
import { IMenudetailModel } from '../../../models/menudetail.model';
import { IPaggingModel } from '../../../models/pagging.model';

export enum MenudetailActionsTypes {
	 
	Load_getmenudetails_code = '[getmenudetails_code] LOAD',
	Load_getmenudetails_codeSuccess = '[getmenudetails_code] LOAD SUCCESS',
	Load_getmenudetails_codeError = '[getmenudetails_code] LOAD ERROR',
  }


export class Load_getmenudetails_code implements Action {
	readonly type = MenudetailActionsTypes.Load_getmenudetails_code;
	constructor(public payload: {code,pagging:IPaggingModel}) { }	
}

export class Load_getmenudetails_codeSuccess implements Action {
	readonly type = MenudetailActionsTypes.Load_getmenudetails_codeSuccess;
	constructor(public payload: {menudetails: IMenudetailModel[] ,cnt:number}) { }	
}

export class Load_getmenudetails_codeError implements Action {
	readonly type = MenudetailActionsTypes.Load_getmenudetails_codeError;
	constructor(public error: any) {}
}
	

  export type MenudetailActions = Load_getmenudetails_code | Load_getmenudetails_codeSuccess | Load_getmenudetails_codeError 