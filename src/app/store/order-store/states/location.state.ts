import * as Locationmodel from 'src/app/models/location.model';
import * as app from '../../application.state';

export interface LocationState extends app.ApplicationState {
    locations: Locationmodel.ILocationModel[]
}

export function DefaultLocationState(): LocationState {
    return {
        ...app.DefaultApplicationState(),
    locations: Locationmodel.DefaultLocations()
    };
}
