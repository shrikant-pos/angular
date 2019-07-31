import { MenuingredientState, DefaultMenuingredientState } from '../states/menuingredient.state';
import { MenuingredientActions, MenuingredientActionsTypes } from '../actions/menuingredient.actions';
import * as app from '../../application.state';

export function MenuingredientReducer(state: MenuingredientState = DefaultMenuingredientState(), action: MenuingredientActions): MenuingredientState {
    switch (action.type) {
    
        case MenuingredientActionsTypes.Save_addmenuingredients:
            return { ...state,
                     ...app.LoadingApplicationState(),
            }
        case MenuingredientActionsTypes.Save_addmenuingredientsSuccess:
            return { ...state,
                     menuingredients: action.payload.menuingredients,
                     ...app.LoadedApplicationState(),
            }
        case MenuingredientActionsTypes.Save_addmenuingredientsError:
            return { ...state,
                 ...app.ErrorApplicationState(action.error),
            };
    
        default:
            return state;
    }
}
