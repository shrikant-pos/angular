import {Action} from '@ngrx/store';
import { IBillModel } from '../../../models/bill.model';
import { IPaggingModel } from '../../../models/pagging.model';

export enum BillActionsTypes {
	 
	Save_addbills = '[addbills] LOAD',
	Save_addbillsSuccess = '[addbills] LOAD SUCCESS',
	Save_addbillsError = '[addbills] LOAD ERROR',
  }


export class Save_addbills implements Action {
	readonly type = BillActionsTypes.Save_addbills;
	constructor(public payload: {pagging:IPaggingModel}) { }	
}

export class Save_addbillsSuccess implements Action {
	readonly type = BillActionsTypes.Save_addbillsSuccess;
	constructor(public payload: {bills: IBillModel[] ,cnt:number}) { }	
}

export class Save_addbillsError implements Action {
	readonly type = BillActionsTypes.Save_addbillsError;
	constructor(public error: any) {}
}
	

  export type BillActions = Save_addbills | Save_addbillsSuccess | Save_addbillsError 