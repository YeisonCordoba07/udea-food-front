import { Component, Input, OnInit } from '@angular/core';
import {AccountInfo, TiendaInfo, UsuarioInfo} from "@core/models/udea.model";
import {LoginService} from "@core/services/login/login.service";

@Component({
  selector: 'app-account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.css']
})
export class AccountMenuComponent implements OnInit {

  showMenu: boolean = false;
  @Input() currentAccount!: TiendaInfo | UsuarioInfo | null;
  @Input() accountInfo!: AccountInfo | null;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  handleChangeAccount(id: number) {
    console.log(`Changing account to ID: ${id}`);
  }

  logOut() {
    this.loginService.logout();
  }

  toggleMenu(){
    console.log("cambio", this.showMenu);
    this.showMenu = !this.showMenu;
  }

}
