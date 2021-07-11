import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { LoggedUser } from 'src/app/models/LoggedUser';
import { AppState } from 'src/app/store';
import { selectLoggedUser } from 'src/app/store/auth/auth.selectors';
import { GetCustomerInfo } from 'src/app/store/customer/customer.actions';
import { selectCustomerInfo } from 'src/app/store/customer/customer.selectors';
import { LoadOrderForCustomer } from 'src/app/store/order/order.actions';
import { LoadAllProducts } from 'src/app/store/product/product.actions';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  user$=this.store.pipe(
    select(selectLoggedUser),
    filter(val => val !== undefined)
  );

  customer$=this.store.pipe(
    select(selectCustomerInfo),
    filter(val => val !== undefined)
  );

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    var user: LoggedUser;
    this.user$.subscribe(
      u => user = u
    )
    this.store.dispatch(GetCustomerInfo({email: user.email}))
    this.store.dispatch(LoadOrderForCustomer({id: user.id}));
    this.store.dispatch(LoadAllProducts());
  }

}
