import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IngredienteProducto, Producto} from "@core/models/udea.model";
import {EmptyDialogComponent} from "@components/atoms/empty-dialog/empty-dialog.component";
import {Router} from "@angular/router";
import {CartService} from "@core/services/cart/cart.service";

@Component({
  selector: 'app-product-card-detail',
  templateUrl: './product-card-detail.component.html',
  styleUrls: ['./product-card-detail.component.css']
})
export class ProductCardDetailComponent implements OnInit {

  @Input() src: string = 'assets/images/food1.jpg';
  @Input() producto: Producto | null = null;
  @Input() ingredients!: IngredienteProducto | null;

  @ViewChild(EmptyDialogComponent) emptyDialog!: EmptyDialogComponent;


  constructor(private router: Router, private cartService: CartService) { }


  ngOnInit(): void {
  }


  openDialog() {
    this.emptyDialog.openDialog();
  }

  openTienda(){
    if (!this.producto || !this.producto.idTienda) {
      console.error('Producto or idTienda is not defined');
      return;
    }
    this.router.navigate(['/tienda', this.producto.idTienda]);
  }


  addToCart() {
  if (!this.producto) {
      console.error('Producto is not defined');
      return;
    }
    this.cartService.addToCart(this.producto);
  }
}
