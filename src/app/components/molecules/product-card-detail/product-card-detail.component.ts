import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IngredienteProducto, Producto} from "@core/models/udea.model";
import {EmptyDialogComponent} from "@components/atoms/empty-dialog/empty-dialog.component";

@Component({
  selector: 'app-product-card-detail',
  templateUrl: './product-card-detail.component.html',
  styleUrls: ['./product-card-detail.component.css']
})
export class ProductCardDetailComponent implements OnInit {

  @Input() src: string = 'assets/images/food1.jpg';
  @Input() producto!: Producto;
  @Input() ingredients!: IngredienteProducto | null;

  @ViewChild(EmptyDialogComponent) emptyDialog!: EmptyDialogComponent;

  constructor() { }

  ngOnInit(): void {
  }

  openDialog() {
    this.emptyDialog.openDialog();
  }


}
