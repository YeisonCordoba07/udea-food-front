import {Component, OnInit} from '@angular/core';
import {TiendaService} from "@core/services/tienda/tienda.service";
import {ActivatedRoute} from "@angular/router";
import {Producto} from "@core/models/udea.model";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  tienda$ = this.tiendaService.tienda$;

  filteredProducts: Producto[] = [];
  allProducts: Producto[] = [];

  wordFilter = new FormControl('');

  constructor(
    private tiendaService: TiendaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    const idTienda = this.route.snapshot.paramMap.get('id');

    if (idTienda) {
      this.tiendaService.searchTiendaById(idTienda);
    }

    this.tienda$.subscribe(tienda => {

      if (!tienda) {
        return;
      }

      this.allProducts = tienda.secciones.flatMap(
        seccion => seccion.productos
      );
      console.log("Productos cargados FLAT: ", this.allProducts);

    });


    this.wordFilter.valueChanges.subscribe(value => {

      const word = (value || "").toLowerCase().trim();

      if (!word) {
        this.filteredProducts = [];
        return;
      }

      this.filteredProducts = this.allProducts.filter(producto =>
        producto.nombre.toLowerCase().includes(word)
      );

    });
  }
}

