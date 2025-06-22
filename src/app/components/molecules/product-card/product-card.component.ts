import {Component, Input, OnInit} from '@angular/core';
import {Producto} from "@core/models/udea.model";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() src: string = 'assets/images/food1.jpg';
  @Input() producto!: Producto;

  constructor() { }

  ngOnInit(): void {
  }

}
