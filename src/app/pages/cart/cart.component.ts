import { Component, OnInit } from '@angular/core';
import {CartService} from "@core/services/cart/cart.service";
import {GLOBAL} from "@core/constants/services.constants";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart = this.cartService.cart$;
  src: string = GLOBAL.SRC_DEFAULT_RUTE_IMAGE;
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
