import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  src: string = "assets/images/food1.png";
  cart: any[]=[];
  showCart: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
