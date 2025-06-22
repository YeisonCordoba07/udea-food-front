import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IngredienteProducto, Producto} from "@core/models/udea.model";

@Component({
  selector: 'app-product-card-detail',
  templateUrl: './product-card-detail.component.html',
  styleUrls: ['./product-card-detail.component.css']
})
export class ProductCardDetailComponent implements OnInit {

  @Input() src: string = 'assets/images/food1.jpg';
  @Input() producto!: Producto;
  @Input() ingredients!: IngredienteProducto | null;
  @Input() show: boolean = false;
  @Output() close = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.show = false;
    this.close.emit();
  }

}
