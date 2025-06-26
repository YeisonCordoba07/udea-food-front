import { Component, Input, OnInit } from '@angular/core';
import {AccountInfo, TiendaInfo, UsuarioInfo} from "@core/models/udea.model";

@Component({
  selector: 'app-account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.css']
})
export class AccountMenuComponent implements OnInit {

  @Input() currentAccount!: TiendaInfo | UsuarioInfo;
  @Input() accountInfo!: AccountInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
