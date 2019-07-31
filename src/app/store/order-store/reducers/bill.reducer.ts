import { BillState, DefaultBillState } from '../states/bill.state';
import { BillActions, BillActionsTypes } from '../actions/bill.actions';
import * as app from '../../application.state';

export function BillReducer(state: BillState = DefaultBillState(), action: BillActions): BillState {
    switch (action.type) {
    
        case BillActionsTypes.Save_addbills:
            return { ...state,
                     ...app.LoadingApplicationState(),
            }
        case BillActionsTypes.Save_addbillsSuccess:
            return { ...state,
                     bills: action.payload.bills,
                     ...app.LoadedApplicationState(),
            }
        case BillActionsTypes.Save_addbillsError:
            return { ...state,
                 ...app.ErrorApplicationState(action.error),
            };
    
        default:
            return state;
    }
}
