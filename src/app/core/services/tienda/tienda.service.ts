import {Injectable} from '@angular/core';
import {BehaviorSubject, ReplaySubject, Subscription} from "rxjs";
import {TiendaPerfil} from "@core/models/udea.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_ROUTES} from "@core/constants/routes.constants";
import {LoginService} from "@core/services/login/login.service";
import {LOGIN, TIENDA} from "@core/constants/services.constants";

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  private loginSubscription!: Subscription;
  private tiendaSubject= new BehaviorSubject<TiendaPerfil | null>(null);
  public tienda$ = this.tiendaSubject.asObservable();

  private seccionesSubject = new ReplaySubject<any[]>(1);
  public secciones$ = this.seccionesSubject.asObservable();



  constructor(private http: HttpClient, private loginService: LoginService) { }


  searchTiendaById(idTienda: string): void {
    this.http.get<TiendaPerfil>(`${API_ROUTES.GET_TIENDA_BY_ID_URL}?id=${idTienda}`).subscribe({
      next: (tienda) => this.tiendaSubject.next(tienda),
      error: (error) => console.error('Error fetching tienda:', error)
    });
  }


  getSeccionesByIdTienda(): void {
    const idTienda = this.getIdTienda();

    if(idTienda === 0){
      return;
    }

    const url = `${TIENDA.GET_SECCIONES_BY_ID_TIENDA_URL}?idTienda=${idTienda}`;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem(LOGIN.LOCALSTORAGE_TOKEN_NAME)}`
      });

    this.http.get<any[]>(url, {headers}).subscribe({
      next: (secciones) => {
        this.seccionesSubject.next(secciones);
      },
      error: (error) => {
        console.error('Error fetching secciones:', error);
        this.seccionesSubject.next([]);
      }
    })
  }




  private getIdTienda(): number {
    let idTienda = 0;
    this.loginSubscription = this.loginService.currentAccount$.subscribe({
      next: (account) => {
        if (account && account.id && account.tipoCuenta === LOGIN.ACCOUNT_TIENDA_TYPE_NAME) {
          idTienda = account.id;
        } else {
          console.error('No ha iniciado sesión o el tipo de cuenta no es tienda.');
          this.tiendaSubject.next(null);
        }
      },
      error: (error) => {
        console.error('Error fetching account:', error);
        this.tiendaSubject.next(null);
      }
    });
    return idTienda;
  }


}
