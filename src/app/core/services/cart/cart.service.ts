import { Injectable } from '@angular/core';
import {Producto} from "@core/models/udea.model";
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartSubject=  new BehaviorSubject<Producto[]>([]);

  private totalPriceSubject = new BehaviorSubject(0);

  get cart$() {
    return this.cartSubject.asObservable();
  }



  constructor() {

    const cart: Producto[] = JSON.parse(localStorage.getItem("cart") || '[]');
    if(cart && cart.length > 0) {
      this.cartSubject.next(cart);
    }
  }


  addToCart(producto: Producto) {
    if(producto){
      const currentCart = this.cartSubject.getValue();

      const existingProductIndex = currentCart.findIndex(item => item.idProducto === producto.idProducto);

      if (existingProductIndex !== -1) {
        return;
      }
      currentCart.push(producto);

      this.cartSubject.next(currentCart);
      localStorage.setItem("cart", JSON.stringify(currentCart));

    }
  }

  removeFromCart(idProducto: number) {
    const currentCart = this.cartSubject.getValue();
    const updatedCart = currentCart.filter(producto => producto.idProducto !== idProducto);
    this.cartSubject.next(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  clearCart() {
    this.cartSubject.next([]);
    localStorage.removeItem("cart");
  }

  get totalPrice$(): Observable<number> {
    return this.cart$.pipe(
      map((cart) => cart.reduce((total, item) => total + item.precio, 0))
    );
  }
}
