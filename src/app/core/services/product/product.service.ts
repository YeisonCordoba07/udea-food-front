import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LOGIN, PRODUCTO} from "@core/constants/services.constants";
import {LoginService} from "@core/services/login/login.service";
import {Subscription} from "rxjs";
import {ProductoIngredienteRequest} from "@core/models/udea.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private loginSubscription!: Subscription;


  constructor(private http: HttpClient, private loginService: LoginService) {
  }


  createProduct(newProducto: ProductoIngredienteRequest) {
    if (newProducto) {
      const idTienda = this.getIdTienda();
      newProducto.idTienda = idTienda;
      newProducto.ingredienteProducto.idTienda = idTienda;
    }
    console.log("token JWT: ", localStorage.getItem(LOGIN.LOCALSTORAGE_TOKEN_NAME))
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem(LOGIN.LOCALSTORAGE_TOKEN_NAME)}`
    });
    return this.http.post(PRODUCTO.CREATE_PRODUCT_URL, newProducto, {headers});

  }


  private getIdTienda(): number {
    let idTienda = 0;
    this.loginSubscription = this.loginService.currentAccount$.subscribe({
      next: (account) => {
        if (account && account.id && account.tipoCuenta === LOGIN.ACCOUNT_TIENDA_TYPE_NAME) {
          idTienda = account.id;
        } else {
          console.error('No ha iniciado sesión o el tipo de cuenta no es tienda.');

        }
      },
      error: (error) => {
        console.error('PRODUCTO SERVICE: Error fetching id tienda:', error);
      }
    });
    return idTienda;
  }


}
