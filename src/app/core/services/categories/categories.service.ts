import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Categoria} from "@core/models/udea.model";
import {CATEGORIA} from "@core/constants/services.constants";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {


  constructor(private http: HttpClient) { }


  getCategories(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${CATEGORIA.GET_ALL_CATEGORIES_URL}`) || [];
  }

}
