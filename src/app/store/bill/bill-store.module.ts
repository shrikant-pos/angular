import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {BillReducer} from './reducers/bill.reducer';
import {BillEffects} from './effects/bill.effects';
import {BilldetailsReducer} from './reducers/billdetails.reducer';
import {BilldetailsEffects} from './effects/billdetails.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
		StoreModule.forFeature('bill',BillReducer),
		StoreModule.forFeature('billdetails',BilldetailsReducer),
		EffectsModule.forFeature([BillEffects,BilldetailsEffects,])
  ],
  providers: []
})
export class BillStoreModule { }
