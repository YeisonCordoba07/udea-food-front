import { Component, OnInit } from '@angular/core';
import {CartService} from "@core/services/cart/cart.service";

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.css']
})
export class MiniCartComponent implements OnInit {

  src: string = "assets/images/food1.jpg";
  cart = this.cartService.cart$;
  showCart: boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  removeFromCart(idProducto: number) {
      this.cartService.removeFromCart(idProducto);
  }
}
