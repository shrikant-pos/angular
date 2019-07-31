import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
//import * as mocks from 'src/app/mocks/bill.mocks';
import * as actions from '../actions/bill.actions';

@Injectable()
export class BillEffects {

  constructor(private actions$: Actions, private http: HttpClient) { }
  
  @Effect()
  Save_addbills = this.actions$.pipe( ofType(actions.BillActionsTypes.Save_addbills),
    switchMap(({ payload }) => {
      return this.http.post('http://localhost:8180/api/order/bill/addbills',payload).pipe(
        map((response: any) => new actions.Save_addbillsSuccess({ bills: response.data,cnt: response.cnt})),
        catchError(error => of(new actions.Save_addbillsError(error)))
      );      
    }),
  );


}
