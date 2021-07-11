import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SellerComponent } from './components/seller/seller.component';
import { CustomerComponent } from './components/customer/customer.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth/auth.effects';
import { SellerProfileComponent } from './components/seller-profile/seller-profile.component';
import { SellerEffects } from './store/seller/seller.effects';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductEffects } from './store/product/product.effects';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { CustomerEffects } from './store/customer/customer.effects';
import { OrderEffects } from './store/order/order.effects';
import { SellerOrdersComponent } from './components/seller-orders/seller-orders.component';
import { CustomerOrdersComponent } from './components/customer-orders/customer-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RegisterComponent,
    LoginComponent,
    SellerComponent,
    CustomerComponent,
    SellerProfileComponent,
    CreateProductComponent,
    CustomerProfileComponent,
    SellerOrdersComponent,
    CustomerOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([
      AuthEffects,
      SellerEffects,
      ProductEffects,
      CustomerEffects,
      OrderEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
