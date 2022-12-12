import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from "path";
import {ProductComponent} from "./componets/product/product.component";
import {SingleProductPageComponent} from "./componets/single-product-page/single-product-page.component";
import {CheckOutComponent} from "./componets/check-out/check-out.component";

const routes: Routes = [
  {path:"product-page",component:ProductComponent},
  {path:"single-product-page",component:SingleProductPageComponent},
  {path:"check-out-page",component:CheckOutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
