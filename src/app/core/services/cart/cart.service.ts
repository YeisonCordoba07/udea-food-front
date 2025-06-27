import { Injectable } from '@angular/core';
import {Producto} from "@core/models/udea.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartSubject=  new BehaviorSubject<Producto[]>([]);

  get cart$() {
    return this.cartSubject.asObservable();
  }



  constructor() {
    // @ts-ignore
    const cart: Producto[] | [] = localStorage.getItem("cart");
    if(cart && cart.length > 0) {
      this.cartSubject.next(cart);
    }
  }


  addToCart(producto: Producto) {
    if(producto){
      const currentCart = this.cartSubject.getValue();
      const existingProductIndex = currentCart.findIndex(item => item.idTienda === producto.idTienda);

      if (existingProductIndex === -1) {
        return;
      }
      currentCart.push(producto);

      this.cartSubject.next(currentCart);
      localStorage.setItem("cart", JSON.stringify(currentCart));

    }
  }

  remoteFromCart(idProducto: number) {
    const currentCart = this.cartSubject.getValue();
    const updatedCart = currentCart.filter(producto => producto.idTienda !== idProducto);
    this.cartSubject.next(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  clearCart() {
    this.cartSubject.next([]);
    localStorage.removeItem("cart");
  }
}
