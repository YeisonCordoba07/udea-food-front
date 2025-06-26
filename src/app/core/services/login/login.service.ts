import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, Observable, tap, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {API_ROUTES} from "@core/constants/routes.constants";
import {AccountInfo, LoginRequest, LoginResponse, TiendaInfo, UsuarioInfo} from "@core/models/udea.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private accountInfoSubject = new BehaviorSubject<AccountInfo | null>(null);

  private currentAccountSubject = new BehaviorSubject<UsuarioInfo | TiendaInfo | null>(null);

  private isLoggedSubject = new BehaviorSubject<boolean>(false);

  private tokenSubject = new BehaviorSubject<string | null>(localStorage.getItem('token'));




  constructor(private http: HttpClient) {
  }




  // Expose observables for state management
  get accountInfo$(): Observable<AccountInfo | null> {
    return this.accountInfoSubject.asObservable();
  }

  get token$(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }

  get isLogged$(): Observable<boolean> {
    return this.isLoggedSubject.asObservable();
  }

  get currentAccount$(): Observable<UsuarioInfo | TiendaInfo | null> {
    return this.currentAccountSubject.asObservable();
  }




  // Login method
  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(API_ROUTES.LOGIN_URL, credentials).pipe(
      tap((response) => {
        this.handleLoginSuccess(response);
      }),
      catchError((error) => {
        console.error('Login failed:', error);
        return throwError(() => new Error('Login failed'));
      })
    );
  }


  // Logout method
  logout(): void {
    this.accountInfoSubject.next(null);
    this.tokenSubject.next(null);
    this.isLoggedSubject.next(false);
    localStorage.removeItem('token');
  }


  // Handle successful login
  private handleLoginSuccess(response: LoginResponse): void {
    this.accountInfoSubject.next(response.accountInfo);
    this.tokenSubject.next(response.token);
    this.isLoggedSubject.next(true);
    localStorage.setItem('token', response.token);
    this.currentAccountSubject.next(this.chooseCurrentAccount());
  }


  chooseCurrentAccount(): UsuarioInfo | TiendaInfo | null {
    const account = this.accountInfoSubject.value;
    const idActivo = account?.idActivo;

    if(account?.usuario.id === idActivo && account?.usuario){
      return account?.usuario;
    }

    const tiendaActiva = account?.tiendas.find((tienda)=>{
      return tienda.id === idActivo;
    });
    if(tiendaActiva){
      return tiendaActiva;
    }

    return null;
  }


  // Retrieve token from localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

}
