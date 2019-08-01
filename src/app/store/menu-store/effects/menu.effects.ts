import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
//import * as mocks from 'src/app/mocks/menu.mocks';
import * as actions from '../actions/menu.actions';

@Injectable()
export class MenuEffects {

  constructor(private actions$: Actions, private http: HttpClient) { }
  
  @Effect()
  Load_getmenus_title = this.actions$.pipe( ofType(actions.MenuActionsTypes.Load_getmenus_title),
    switchMap(({ payload }) => {
      return this.http.post('http://localhost:8180/api/menu/getmenus_title',payload).pipe(
        map((response: any) => new actions.Load_getmenus_titleSuccess({ menus: response.data,cnt: response.cnt})),
        catchError(error => of(new actions.Load_getmenus_titleError(error)))
      );      
    }),
  );


}
