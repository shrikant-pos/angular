import * as Menudetailmodel from 'src/app/models/menudetail.model';
import * as app from '../../application.state';

export interface MenudetailState extends app.ApplicationState {
    menudetails: Menudetailmodel.IMenudetailModel[]
}

export function DefaultMenudetailState(): MenudetailState {
    return {
        ...app.DefaultApplicationState(),
    menudetails: Menudetailmodel.DefaultMenudetails()
    };
}
