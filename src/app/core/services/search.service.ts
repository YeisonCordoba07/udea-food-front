import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_ROUTES} from "../constants/routes.constanst";
import {Producto} from "../models/udea.model";
import { BehaviorSubject } from 'rxjs';

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
