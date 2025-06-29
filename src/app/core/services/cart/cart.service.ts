import {Injectable, OnDestroy} from '@angular/core';
import {Producto, TiendaInfo, UsuarioInfo} from "@core/models/udea.model";
import {BehaviorSubject, map, Observable, Subscription} from "rxjs";
import {LoginService} from "@core/services/login/login.service";
import {CART, LOGIN} from "@core/constants/services.constants";

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnDestroy {

  private cartSubject=  new BehaviorSubject<Producto[]>([]);

  private currentAccount: UsuarioInfo | TiendaInfo | null = null;
  private loginSubscription!: Subscription;


  get cart$() {
    return this.cartSubject.asObservable();
  }



  constructor(private loginService: LoginService) {
    const cart: Producto[] = JSON.parse(localStorage.getItem(CART.LOCALSTORAGE_NAME) || '[]');
    if(cart && cart.length > 0) {
      this.cartSubject.next(cart);
    }


    this.loginSubscription = this.loginService.currentAccount$.subscribe(account => {
      this.currentAccount = account;
    });
  }


  addToCart(producto: Producto) {
    if(producto && this.isUserAccount()) {
      const currentCart = this.cartSubject.getValue();

      const existingProductIndex = currentCart.findIndex(item => item.idProducto === producto.idProducto);

      if (existingProductIndex !== -1) {
        return;
      }
      currentCart.push(producto);

      this.cartSubject.next(currentCart);
      localStorage.setItem(CART.LOCALSTORAGE_NAME, JSON.stringify(currentCart));

    }
  }

  removeFromCart(idProducto: number) {
    if(this.isUserAccount()){

      const currentCart = this.cartSubject.getValue();
      const updatedCart = currentCart.filter(producto => producto.idProducto !== idProducto);
      this.cartSubject.next(updatedCart);
      localStorage.setItem(CART.LOCALSTORAGE_NAME, JSON.stringify(updatedCart));
    }
  }

  clearCart() {
    if(this.isUserAccount()) {
      this.cartSubject.next([]);
      localStorage.removeItem(CART.LOCALSTORAGE_NAME);
    }
  }

  get totalPrice$(): Observable<number> {
    return this.cart$.pipe(
      map((cart) => cart.reduce((total, item) => total + item.precio, 0))
    );
  }

  private isUserAccount(): boolean {
    return this.currentAccount?.tipoCuenta.toLowerCase() === LOGIN.ACCOUNT_USERNAME_TYPE_NAME;
  }

  ngOnDestroy(): void {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }
}
