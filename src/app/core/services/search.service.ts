import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


import { BehaviorSubject } from 'rxjs';
import {API_ROUTES} from "@core/constants/routes.constants";
import {Producto} from "@core/models/udea.model";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private productosSubject = new BehaviorSubject<Producto[]>([]);
  productos$ = this.productosSubject.asObservable();

  constructor(private readonly http: HttpClient) { }

  searchByName(query: string): void {

    this.http.get<Producto[]>(`${API_ROUTES.SEARCH_PRODUCT_BY_NAME_URL}?nombre=${query}`)
      .subscribe({
        next: (productos) => {
          this.productosSubject.next(productos);
        },
        error: (error) => {
          console.error('Error fetching products:', error);
        }
      });
  }
}
