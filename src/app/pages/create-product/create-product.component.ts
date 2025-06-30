import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  step: number = 0;
  options = [
    { value: 1, label: "Platos principales" },
    { value: 2, label: "Postres" },
    { value: 3, label: "Bebidas" },
    { value: 4, label: "Internacional del norte de china" },
  ];



  constructor() { }

  ngOnInit(): void {
    this.step = 1;
  }

  handleChangeDropdown() {

  }

  handleNextStep() {

  }
}
