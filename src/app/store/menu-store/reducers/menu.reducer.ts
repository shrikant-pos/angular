import { MenuState, DefaultMenuState } from '../states/menu.state';
import { MenuActions, MenuActionsTypes } from '../actions/menu.actions';
import * as app from '../../application.state';

export function MenuReducer(state: MenuState = DefaultMenuState(), action: MenuActions): MenuState {
    switch (action.type) {
    
        case MenuActionsTypes.Load_getmenus_title:
            return { ...state,
                     ...app.LoadingApplicationState(),
            }
        case MenuActionsTypes.Load_getmenus_titleSuccess:
            return { ...state,
                     menus: action.payload.menus,
                     ...app.LoadedApplicationState(),
            }
        case MenuActionsTypes.Load_getmenus_titleError:
            return { ...state,
                 ...app.ErrorApplicationState(action.error),
            };
    
        default:
            return state;
    }
}
