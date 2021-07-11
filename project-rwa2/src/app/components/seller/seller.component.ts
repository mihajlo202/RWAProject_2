import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { LoggedUser } from 'src/app/models/LoggedUser';
import { AppState } from 'src/app/store';
import { selectLoggedUser } from 'src/app/store/auth/auth.selectors';
import { LoadOrderForSeller } from 'src/app/store/order/order.actions';
import { LoadSellerProducts } from 'src/app/store/product/product.actions';
import { GetSellerInfo } from 'src/app/store/seller/seller.actions';
import { selectSellerInfo } from 'src/app/store/seller/seller.selectors';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  user$=this.store.pipe(
    select(selectLoggedUser),
    filter(val => val !== undefined)
  );

  seller$=this.store.pipe(
    select(selectSellerInfo),
    filter(val => val !== undefined)
  );
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    var user: LoggedUser;
    this.user$.subscribe(u => user = u)
    this.store.dispatch(GetSellerInfo({email: user.email}))
    this.seller$.subscribe( (seller) =>{
      this.store.dispatch(LoadSellerProducts({sellerId:seller.id}))
    })
    this.store.dispatch(LoadOrderForSeller({id:user.id}));
  }

}
