import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Producto} from "@core/models/udea.model";
import {ProductCardDetailComponent} from "@components/molecules/product-card-detail/product-card-detail.component";
import {CartService} from "@core/services/cart/cart.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() src: string = 'assets/images/food1.jpg';
  @Input() producto!: Producto;

  constructor(private cartService: CartService) { }

  @ViewChild(ProductCardDetailComponent) detailDialog!: ProductCardDetailComponent;
  ngOnInit(): void {
  }


  openDetails() {
    this.detailDialog.openDialog();
  }

  addToCart() {
    this.cartService.addToCart(this.producto);
  }
}
