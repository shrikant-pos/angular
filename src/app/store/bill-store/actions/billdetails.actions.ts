import {Action} from '@ngrx/store';
import { IBilldetailsModel } from '../../../models/billdetails.model';
import { IPaggingModel } from '../../../models/pagging.model';

export enum BilldetailsActionsTypes {
	 
	Load_getbilldetails = '[getbilldetails] LOAD',
	Load_getbilldetailsSuccess = '[getbilldetails] LOAD SUCCESS',
	Load_getbilldetailsError = '[getbilldetails] LOAD ERROR',
  }


export class Load_getbilldetails implements Action {
	readonly type = BilldetailsActionsTypes.Load_getbilldetails;
	constructor(public payload: {billnumber,pagging:IPaggingModel}) { }	
}

export class Load_getbilldetailsSuccess implements Action {
	readonly type = BilldetailsActionsTypes.Load_getbilldetailsSuccess;
	constructor(public payload: {billdetailss: IBilldetailsModel[] ,cnt:number}) { }	
}

export class Load_getbilldetailsError implements Action {
	readonly type = BilldetailsActionsTypes.Load_getbilldetailsError;
	constructor(public error: any) {}
}
	

  export type BilldetailsActions = Load_getbilldetails | Load_getbilldetailsSuccess | Load_getbilldetailsError 