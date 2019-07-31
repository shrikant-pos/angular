import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
//import * as mocks from 'src/app/mocks/menudetail.mocks';
import * as actions from '../actions/menudetail.actions';

@Injectable()
export class MenudetailEffects {

  constructor(private actions$: Actions, private http: HttpClient) { }
  
  @Effect()
  Load_getmenudetails_code = this.actions$.pipe( ofType(actions.MenudetailActionsTypes.Load_getmenudetails_code),
    switchMap(({ payload }) => {
      return this.http.post('http://localhost:8180/api/menu/menudetail/getmenudetails_code',payload).pipe(
        map((response: any) => new actions.Load_getmenudetails_codeSuccess({ menudetails: response.data,cnt: response.cnt})),
        catchError(error => of(new actions.Load_getmenudetails_codeError(error)))
      );      
    }),
  );


}
