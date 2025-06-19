import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_ROUTES} from "../constants/routes.constanst";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private readonly http: HttpClient) { }

  searchByName(query: string) {
    return this.http.get<any[]>(`${API_ROUTES.SEARCH_PRODUCT_BY_NAME_URL}?nombre=${query}`);

  }
}
