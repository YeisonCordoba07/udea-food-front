import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {TiendaPerfil} from "@core/models/udea.model";
import {HttpClient} from "@angular/common/http";
import {API_ROUTES} from "@core/constants/routes.constants";

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  private tiendaSubject= new BehaviorSubject<TiendaPerfil | null>(null);
  public tienda$ = this.tiendaSubject.asObservable();

  constructor(private http: HttpClient) { }


  searchTiendaById(idTienda: string): void {
    this.http.get<TiendaPerfil>(`${API_ROUTES.GET_TIENDA_BY_ID_URL}?id=${idTienda}`).subscribe({
      next: (tienda) => {
        this.tiendaSubject.next(tienda);
      },
      error: (error) => {
        console.error('Error fetching tienda:', error);
        this.tiendaSubject.next(null);
      }
    });
  }


}
