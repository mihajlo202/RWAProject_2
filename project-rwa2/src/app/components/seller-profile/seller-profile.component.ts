import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Product } from 'src/app/models/Product';
import { Seller } from 'src/app/models/Seller';
import { AppState } from 'src/app/store';
import { ProductUpdateSet } from 'src/app/store/product-update/product-update.actions';
import { DeleteProduct } from 'src/app/store/product/product.actions';
import { selectAllProducts } from 'src/app/store/product/product.selectors';
import { selectSellerInfo } from 'src/app/store/seller/seller.selectors';

@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.css']
})
export class SellerProfileComponent implements OnInit {
  displayEventModal:boolean;
  isUpdating: boolean;
  allProducts: Product[] = [];
  
  seller: Seller={
    id: undefined,
    name: '',
    surname: '',
    email: '',
    company: ''
  }

  seller$=this.store.pipe(
    select(selectSellerInfo),
    filter(val => val !== undefined)
  );
  
  constructor(private store: Store<AppState>) { 
    this.displayEventModal=false;
    this.isUpdating=false;
  }

  ngOnInit(): void {
    this.seller$.subscribe( (seller: Seller) => this.seller={...seller})
    this.store.select(selectAllProducts).subscribe((products) => {
      this.allProducts = products as Product[]
    });
  }

  createNewJobClicked(){
    this.displayEventModal=true;
    this.isUpdating=false;
  }

  hideJobModal(){
    this.displayEventModal=false;
  }

  onUpdateClick(product : Product){
    this.displayEventModal=true;
    this.isUpdating=true;
    this.store.dispatch(ProductUpdateSet({product: product}));
  }

  onDeleteClick(product: Product){
    this.store.dispatch(DeleteProduct({product: product}));
  }
}