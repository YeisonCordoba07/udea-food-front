import { Component, OnInit } from '@angular/core';
import {LoginService} from "@core/services/login/login.service";

@Component({
  selector: 'app-account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.css']
})
export class AccountMenuComponent implements OnInit {

  showMenu: boolean = false;
  currentAccount = this.loginService.currentAccount$;
  accountInfo = this.loginService.accountInfo$;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  handleChangeAccount(idCuenta: number) {
    this.loginService.changeAccount(idCuenta);
  }

  logOut() {
    this.loginService.logout();
  }

  toggleMenu(){
    this.showMenu = !this.showMenu;
  }

}
