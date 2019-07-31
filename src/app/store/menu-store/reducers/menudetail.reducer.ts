import { MenudetailState, DefaultMenudetailState } from '../states/menudetail.state';
import { MenudetailActions, MenudetailActionsTypes } from '../actions/menudetail.actions';
import * as app from '../../application.state';

export function MenudetailReducer(state: MenudetailState = DefaultMenudetailState(), action: MenudetailActions): MenudetailState {
    switch (action.type) {
    
        case MenudetailActionsTypes.Load_getmenudetails_code:
            return { ...state,
                     ...app.LoadingApplicationState(),
            }
        case MenudetailActionsTypes.Load_getmenudetails_codeSuccess:
            return { ...state,
                     menudetails: action.payload.menudetails,
                     ...app.LoadedApplicationState(),
            }
        case MenudetailActionsTypes.Load_getmenudetails_codeError:
            return { ...state,
                 ...app.ErrorApplicationState(action.error),
            };
    
        default:
            return state;
    }
}
