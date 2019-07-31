import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
//import * as mocks from 'src/app/mocks/location.mocks';
import * as actions from '../actions/location.actions';

@Injectable()
export class LocationEffects {

  constructor(private actions$: Actions, private http: HttpClient) { }
  
  @Effect()
  Load_getbills_location = this.actions$.pipe( ofType(actions.LocationActionsTypes.Load_getbills_location),
    switchMap(({ payload }) => {
      return this.http.post('http://localhost:8180/api/order/location/getbills_location',payload).pipe(
        map((response: any) => new actions.Load_getbills_locationSuccess({ locations: response.data,cnt: response.cnt})),
        catchError(error => of(new actions.Load_getbills_locationError(error)))
      );      
    }),
  );


}
