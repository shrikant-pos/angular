import { BilldetailsState, DefaultBilldetailsState } from '../states/billdetails.state';
import { BilldetailsActions, BilldetailsActionsTypes } from '../actions/billdetails.actions';
import * as app from '../../application.state';

export function BilldetailsReducer(state: BilldetailsState = DefaultBilldetailsState(), action: BilldetailsActions): BilldetailsState {    
    switch (action.type) {

		case BilldetailsActionsTypes.Load_getbilldetails: 
	return {
	...state,
    ...app.LoadingApplicationState(),
	}

case BilldetailsActionsTypes.Load_getbilldetailsSuccess:
	return {
	...state,
	billdetailss: action.payload.billdetailss,
    ...app.LoadedApplicationState(),
	cnt: action.payload.cnt,  
	}

case BilldetailsActionsTypes.Load_getbilldetailsError:
    return {
        ...state,
        ...app.ErrorApplicationState(action.error),
    };

		default:
            return state;
    }
}