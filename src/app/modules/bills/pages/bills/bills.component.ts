import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BillState } from 'src/app/store/bill/states/bill.state';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/app/store/application.state';
import { Load_getbills_number_customer } from 'src/app/store/bill/actions/bill.actions';
import { Load_getbilldetails } from 'src/app/store/bill/actions/billdetails.actions';
import { BilldetailsState } from 'src/app/store/bill/states/billdetails.state';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {

  bill$: Observable<BillState>;
  billdetails$: Observable<BilldetailsState>;
  pagesize:number;
  currenpage:number;
  sortby:string;
  sortdirection:number;
  maxcount:number;

  constructor(private store: Store<ApplicationState>) {     
    this.pagesize=5;
    this.currenpage=0;
    this.sortby="paymentstatus";
    this.sortdirection=-1;
    this.bill$ = this.store.select<BillState>((state: BillState) => state['bill']);
    this.billdetails$ = this.store.select<BilldetailsState>((state: BilldetailsState) => state['billdetails']);
    this.load();
    this.store.select<BillState>((state: any) => state['bill'])
    .subscribe((data: any) => { if(data) { console.log(data); this.maxcount= data.cnt;} }); 

    this.store.select((state: any) => state)
    .subscribe((data: any) => { if(data) { console.log(data);} }); 

  }
  
  load() {
    const action = new Load_getbills_number_customer({billnumber:12,customer:12,pagging:{skip:this.pagesize*this.currenpage,take:this.pagesize,sortby:this.sortby,sortdirection:this.sortdirection}});    
      this.store.dispatch(action); 
      // const action1 = new Load_getbilldetails({billnumber:12,pagging:{skip:0,take:1}});    
      // this.store.dispatch(action1); 
  }

  ngOnInit() {
  }

loadnextbills(){  
  if (this.currenpage<this.maxcount-1) {
    this.currenpage++;
    this.load();    
  }

}
loadprevbills(){
  if (this.currenpage>0) {
    this.currenpage--;
    this.load(); 
  }
}

LoadbillDetails(billnumber){
  const action = new Load_getbilldetails({billnumber:billnumber,pagging:{skip:0,take:1}});    
      this.store.dispatch(action); 
}

}
