import { Component, OnInit } from '@angular/core';
import {CartService} from "@core/services/cart/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

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
