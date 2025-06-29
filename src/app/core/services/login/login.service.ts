import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {API_ROUTES} from "@core/constants/routes.constants";
import {AccountInfo, TiendaInfo, UsuarioInfo} from "@core/models/udea.model";
import {LOGIN} from "@core/constants/services.constants";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private accountInfoSubject = new BehaviorSubject<AccountInfo | null>(null);
  private currentAccountSubject = new BehaviorSubject<UsuarioInfo | TiendaInfo | null>(null);
  private isLoggedSubject = new BehaviorSubject<boolean>(false);
  private tokenSubject = new BehaviorSubject<string | null>(localStorage.getItem(LOGIN.LOCALSTORAGE_TOKEN_NAME));


  constructor(private http: HttpClient) {
    this.initializeSession();
  }


  get accountInfo$(): Observable<AccountInfo | null> {
    return this.accountInfoSubject.asObservable();
  }

  get currentAccount$(): Observable<UsuarioInfo | TiendaInfo | null> {
    return this.currentAccountSubject.asObservable();
  }

  get isLogged$(): Observable<boolean> {
    return this.isLoggedSubject.asObservable();
  }

  get token$(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }



  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(API_ROUTES.LOGIN_URL, credentials).pipe(
      tap((response: any) => {
        this.handleLoginSuccess(response);
      })
    );
  }


  logout(): void {
    this.accountInfoSubject.next(null);
    this.currentAccountSubject.next(null);
    this.isLoggedSubject.next(false);
    this.tokenSubject.next(null);
    localStorage.removeItem(LOGIN.LOCALSTORAGE_TOKEN_NAME);
    localStorage.removeItem(LOGIN.LOCALSTORAGE_ACCOUNT_INFO_NAME);
  }


 changeAccount(idCuenta: number): void {
    const accountInfo = this.accountInfoSubject.getValue();
    if (accountInfo) {
      const newCurrentAccount = this.chooseCurrentAccount({
        ...accountInfo,
        idActivo: idCuenta
      });
      if(!newCurrentAccount) {
        return;
      }
      this.currentAccountSubject.next(newCurrentAccount);
      accountInfo.idActivo = idCuenta;
      this.accountInfoSubject.next(accountInfo);
      localStorage.setItem(LOGIN.LOCALSTORAGE_ACCOUNT_INFO_NAME, JSON.stringify(accountInfo));
    }
 }


  private handleLoginSuccess(response: any): void {
    this.accountInfoSubject.next(response.accountInfo);
    this.tokenSubject.next(response.token);
    this.isLoggedSubject.next(true);
    localStorage.setItem(LOGIN.LOCALSTORAGE_TOKEN_NAME, response.token);
    localStorage.setItem(LOGIN.LOCALSTORAGE_ACCOUNT_INFO_NAME, JSON.stringify(response.accountInfo));
    this.currentAccountSubject.next(this.chooseCurrentAccount(response.accountInfo));
  }

  private chooseCurrentAccount(accountInfo: AccountInfo): UsuarioInfo | TiendaInfo | null {
    const idActivo = accountInfo.idActivo;
    if (accountInfo.usuario.id === idActivo) {
      return accountInfo.usuario;
    }
    return accountInfo.tiendas.find((tienda) => tienda.id === idActivo) || null;
  }

  private initializeSession(): void {
    const token = localStorage.getItem(LOGIN.LOCALSTORAGE_TOKEN_NAME);
    const accountInfo = localStorage.getItem(LOGIN.LOCALSTORAGE_ACCOUNT_INFO_NAME);
    if (token && accountInfo) {
      this.tokenSubject.next(token);
      this.accountInfoSubject.next(JSON.parse(accountInfo));
      this.isLoggedSubject.next(true);
      this.currentAccountSubject.next(this.chooseCurrentAccount(JSON.parse(accountInfo)));
    }
  }

}
