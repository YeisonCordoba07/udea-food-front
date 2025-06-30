import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  step: number = 1;
  options = [
    { value: 1, label: "Platos principales" },
    { value: 2, label: "Postres" },
    { value: 3, label: "Bebidas" },
    { value: 4, label: "Internacional del norte de china" },
  ];

  newProduct!: FormGroup;



  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.newProduct = this.fb.group({
      nombre: ['', [Validators.required]],
      descripcion: [''],
      precio: [0],
      disponibilidad: [true],
      imagenes: [[]],
      categorias: [[]],
      idSeccionTienda: [0, [Validators.required]],
      idTienda: [0]
    });
  }

  get nombre(){
    return this.newProduct.get('nombre') as FormControl;
  }
  get descripcion(){
    return this.newProduct.get('descripcion') as FormControl;
  }
  get precio(){
    return this.newProduct.get('precio') as FormControl;
  }

  handleChangeDropdown() {

  }

  handleNextStep() {

  }

  createProduct() {

  }
}
