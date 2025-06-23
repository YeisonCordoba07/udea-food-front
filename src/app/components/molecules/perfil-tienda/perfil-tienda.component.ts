import {Component, Input, OnInit} from '@angular/core';
import {TiendaPerfil} from "@core/models/udea.model";

@Component({
  selector: 'app-perfil-tienda',
  templateUrl: './perfil-tienda.component.html',
  styleUrls: ['./perfil-tienda.component.css']
})
export class PerfilTiendaComponent implements OnInit {
  @Input() tienda!: TiendaPerfil;
  constructor() { }

  ngOnInit(): void {
  }

}
