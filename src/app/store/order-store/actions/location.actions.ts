import {Action} from '@ngrx/store';
import { ILocationModel } from '../../../models/location.model';
import { IPaggingModel } from '../../../models/pagging.model';

export enum LocationActionsTypes {
	 
	Load_getbills_location = '[getbills_location] LOAD',
	Load_getbills_locationSuccess = '[getbills_location] LOAD SUCCESS',
	Load_getbills_locationError = '[getbills_location] LOAD ERROR',
  }


export class Load_getbills_location implements Action {
	readonly type = LocationActionsTypes.Load_getbills_location;
	constructor(public payload: {pagging:IPaggingModel}) { }	
}

export class Load_getbills_locationSuccess implements Action {
	readonly type = LocationActionsTypes.Load_getbills_locationSuccess;
	constructor(public payload: {locations: ILocationModel[] ,cnt:number}) { }	
}

export class Load_getbills_locationError implements Action {
	readonly type = LocationActionsTypes.Load_getbills_locationError;
	constructor(public error: any) {}
}
	

  export type LocationActions = Load_getbills_location | Load_getbills_locationSuccess | Load_getbills_locationError 