import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { HeaderComponent } from './componets/header/header.component';
import { ProductComponent } from './componets/product/product.component';
import { SingleProductPageComponent } from './componets/single-product-page/single-product-page.component';
import { CheckOutComponent } from './componets/check-out/check-out.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    ProductComponent,
    SingleProductPageComponent,
    CheckOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
