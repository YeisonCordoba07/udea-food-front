import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LOGIN, PRODUCTO} from "@core/constants/services.constants";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  createProduct(newProducto: any) {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem(LOGIN.LOCALSTORAGE_TOKEN_NAME)}`
    });
    return this.http.post(PRODUCTO.CREATE_PRODUCT_URL, newProducto, {headers});

  }
}
