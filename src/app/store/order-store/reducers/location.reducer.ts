import { LocationState, DefaultLocationState } from '../states/location.state';
import { LocationActions, LocationActionsTypes } from '../actions/location.actions';
import * as app from '../../application.state';

export function LocationReducer(state: LocationState = DefaultLocationState(), action: LocationActions): LocationState {
    switch (action.type) {
    
        case LocationActionsTypes.Load_getbills_location:
            return { ...state,
                     ...app.LoadingApplicationState(),
            }
        case LocationActionsTypes.Load_getbills_locationSuccess:
            return { ...state,
                     locations: action.payload.locations,
                     ...app.LoadedApplicationState(),
            }
        case LocationActionsTypes.Load_getbills_locationError:
            return { ...state,
                 ...app.ErrorApplicationState(action.error),
            };
    
        default:
            return state;
    }
}
