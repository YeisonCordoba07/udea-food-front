import { Component, OnInit } from '@angular/core';
import {CartService} from "@core/services/cart/cart.service";
import {map, reduce} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart = this.cartService.cart$;
  src: string = "assets/images/food1.jpg";
  totalPrice = this.cartService.totalPrice$;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  removeFromCart(idProducto: number) {
    this.cartService.removeFromCart(idProducto)
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
