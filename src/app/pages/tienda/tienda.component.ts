import { Component, OnInit } from '@angular/core';
import {TiendaService} from "@core/services/tienda/tienda.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  tienda$ = this.tiendaService.tienda$;

  constructor(
    private tiendaService: TiendaService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idTienda = this.route.snapshot.paramMap.get('id');
    if (idTienda) {
      this.tiendaService.searchTiendaById(idTienda);
    }
  }



}
