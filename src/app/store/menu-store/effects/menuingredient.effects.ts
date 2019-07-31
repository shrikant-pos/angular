import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
//import * as mocks from 'src/app/mocks/menuingredient.mocks';
import * as actions from '../actions/menuingredient.actions';

@Injectable()
export class MenuingredientEffects {

  constructor(private actions$: Actions, private http: HttpClient) { }
  
  @Effect()
  Save_addmenuingredients = this.actions$.pipe( ofType(actions.MenuingredientActionsTypes.Save_addmenuingredients),
    switchMap(({ payload }) => {
      return this.http.post('http://localhost:8180/api/menu/menuingredient/addmenuingredients',payload).pipe(
        map((response: any) => new actions.Save_addmenuingredientsSuccess({ menuingredients: response.data,cnt: response.cnt})),
        catchError(error => of(new actions.Save_addmenuingredientsError(error)))
      );      
    }),
  );


}
