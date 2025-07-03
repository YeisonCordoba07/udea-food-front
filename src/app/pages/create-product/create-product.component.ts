import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TiendaService} from "@core/services/tienda/tienda.service";
import {map} from "rxjs";
import {ProductService} from "@core/services/product/product.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  step: number = 1;
  options = [
    {value: 1, label: "Platos principales"},
    {value: 2, label: "Postres"},
    {value: 3, label: "Bebidas"},
    {value: 4, label: "Internacional del norte de china"},
  ];

  newProduct!: FormGroup;
  ingredients!: FormGroup;
  secciones$ = this.tiendaService.secciones$.pipe(
    map((secciones: { idSeccionTienda: number; nombre: string }[] | null) =>
      secciones ? secciones.map(seccion => ({value: seccion.idSeccionTienda, label: seccion.nombre})) : []
    )
  );


  constructor(private fb: FormBuilder, private tiendaService: TiendaService, private productService: ProductService) {
    this.tiendaService.getSeccionesByIdTienda();
  }

  ngOnInit(): void {
    this.ingredients = this.fb.group({
      idTienda: [0, [Validators.required]],
      ingredientes: []
    })

    this.newProduct = this.fb.group({
      nombre: ['', [Validators.required]],
      descripcion: [''],
      precio: [0, [Validators.min(0)]],
      disponibilidad: [true],
      imagenes: [[]],
      categorias: [[]],
      idSeccionTienda: [0, [Validators.required, Validators.min(1)]],
      idTienda: [0, ],
      ingredienteProducto: [this.ingredients.value]
    });


  }

  get nombre() {
    return this.newProduct.get('nombre') as FormControl;
  }

  get descripcion() {
    return this.newProduct.get('descripcion') as FormControl;
  }

  get precio() {
    return this.newProduct.get('precio') as FormControl;
  }

  handleChangeDropdown(event: (string | number)[]) {
    this.newProduct.patchValue({categorias: event});
    console.log('Product categories updated:', this.newProduct.value);
  }

  handleChangeFormDropdown(event: number | string) {
    this.newProduct.patchValue({idSeccionTienda: event});
    console.log('Selected section:', this.newProduct.value.idSeccionTienda);
  }

  handleNextStep() {
    this.step = this.step + 1;
  }

  createProduct() {
    console.log("hola amigos de");
    if (this.newProduct.invalid) {
      console.error('Form is invalid');
      return;
    }

    this.productService.createProduct(this.newProduct.value).subscribe({
      next: (response) => {
        console.log('Product created successfully:', response);
      },
      error: (error) => {
        console.error('Error creating product:', error);
      }
    });
  }
}
