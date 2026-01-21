import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


import { BehaviorSubject } from 'rxjs';
import {API_ROUTES} from "@core/constants/routes.constants";
import {Filters, Producto, Tienda} from "@core/models/udea.model";
import { FiltersService } from './filters/filters.service';
import { filterOptions } from '@core/constants/filter.constants';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private productosSubject = new BehaviorSubject<Producto[]>([]);
  productos$ = this.productosSubject.asObservable();

  private tiendasSubject = new BehaviorSubject<Tienda[]>([]);
  tiendas$ = this.tiendasSubject.asObservable();

  constructor(private readonly http: HttpClient, private filtersService: FiltersService) { }



  searchByName(query: string): void {
    const currentFilters: Filters = this.filtersService.getCurrentFilters();

    if(currentFilters.mostrarSolo === filterOptions.mostrarSolo[0]){
        
        this.http.get<Producto[]>(`${API_ROUTES.SEARCH_PRODUCT_BY_NAME_URL}?nombre=${query}`)
            .subscribe({
            next: (productos) => {
                this.productosSubject.next(productos);
            },
            error: (error) => {
                console.error('Error fetching products:', error);
            }
        });

    }else if(currentFilters.mostrarSolo === filterOptions.mostrarSolo[1]){
        this.http.get<Tienda[]>(`${API_ROUTES.SEARCH_TIENDAS_BY_NAME_URL}?nombre=${query}`)
        .subscribe({
            next: (tiendas) =>{
                this.tiendasSubject.next(tiendas);
            },
            error: (error) => {
                console.error('Error fetching stores:', error);
            }
        });
    }
  }



}
