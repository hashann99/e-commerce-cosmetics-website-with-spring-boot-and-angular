import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isShow:boolean=false;

  constructor(private router:Router) {

  }

  showMyCart() {
    if(this.isShow==false) {
      this.isShow = true;
    }else{
      this.isShow=false;
    }
  }

  loadCheckOutPageForPayment() {
    this.router.navigateByUrl('check-out-page')
    this.showMyCart();
  }

  loadProductPage() {
    this.router.navigateByUrl('product-page')
  }
}
