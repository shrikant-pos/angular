import * as Menuingredientmodel from 'src/app/models/menuingredient.model';
import * as app from '../../application.state';

export interface MenuingredientState extends app.ApplicationState {
    menuingredients: Menuingredientmodel.IMenuingredientModel[]
}

export function DefaultMenuingredientState(): MenuingredientState {
    return {
        ...app.DefaultApplicationState(),
    menuingredients: Menuingredientmodel.DefaultMenuingredients()
    };
}
