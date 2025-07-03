import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
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

  newProductForm!: FormGroup;
  ingredientsForm!: FormGroup;
  secciones$ = this.tiendaService.secciones$.pipe(
    map((secciones: { idSeccionTienda: number; nombre: string }[] | null) =>
      secciones ? secciones.map(seccion => ({value: seccion.idSeccionTienda, label: seccion.nombre})) : []
    )
  );


  constructor(private fb: FormBuilder, private tiendaService: TiendaService, private productService: ProductService) {
    this.tiendaService.getSeccionesByIdTienda();
  }

  ngOnInit(): void {

    this.ingredientsForm = this.fb.group({
      idTienda: [0, [Validators.required]],

      ingredientes: this.fb.array([])
    })

    this.newProductForm = this.fb.group({
      nombre: ['', [Validators.required]],
      descripcion: [''],
      precio: [0, [Validators.min(0)]],
      disponibilidad: [true],
      imagenes: [[]],
      categorias: [[]],
      idSeccionTienda: [0, [Validators.required, Validators.min(1)]],
      idTienda: [0, ],
      ingredienteProducto: this.ingredientsForm
    });


  }

  get nombre() {
    return this.newProductForm.get('nombre') as FormControl;
  }

  get descripcion() {
    return this.newProductForm.get('descripcion') as FormControl;
  }

  get precio() {
    return this.newProductForm.get('precio') as FormControl;
  }

  get ingredientes(): FormArray {
    return this.ingredientsForm.get('ingredientes') as FormArray;
  }




  handleChangeDropdown(event: (string | number)[]) {
    this.newProductForm.patchValue({categorias: event});
    console.log('Product categories updated:', this.newProductForm.value);
  }

  handleChangeFormDropdown(event: number | string) {
    this.newProductForm.patchValue({idSeccionTienda: event});
    console.log('Selected section:', this.newProductForm.value.idSeccionTienda);
  }

  handleNextStep() {
    this.step = this.step + 1;
  }

  createProduct() {
    console.log("hola amigos de");
    if (this.newProductForm.invalid) {
      console.error('Form is invalid');
      return;
    }

    this.productService.createProduct(this.newProductForm.value).subscribe({
      next: (response) => {
        console.log('Product created successfully:', response);
      },
      error: (error) => {
        console.error('Error creating product:', error);
      }
    });
  }


  addIngredient() {
    this.ingredientes.push(this.createNewIngredient());
    console.log('New ingredient added:', this.ingredientes.value);
  }


  private createNewIngredient(): FormGroup {
    return this.fb.group({
      nombre: ['', Validators.required],
      minSeleccion: [0, [Validators.min(0)]],
      maxSeleccion: [0, [Validators.min(0)]],
      multiple: [false],
      opciones: this.fb.array([
        this.fb.group({
          nombre: ['', Validators.required],
          costo: [0, [Validators.min(0)]]
        })
      ])
    });
  }

  protected readonly FormGroup = FormGroup;
}
