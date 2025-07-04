import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  @Input() ingredientArray!: AbstractControl;
  @Input() indexIngrediente: number = 0;

  @Output() onChange = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
    console.log('Index:', this.indexIngrediente);
    console.log('Ingredient:', this.ingredientArray.value);
  }

  get nombre(): FormControl {
    return this.ingredientArray.get('nombre') as FormControl;
  }
  get minSeleccion():FormControl{
    return this.ingredientArray.get('minSeleccion') as FormControl;
  }
  get maxSeleccion():FormControl{
    return this.ingredientArray.get('maxSeleccion') as FormControl;
  }

  get options(): FormArray{
    return this.ingredientArray.get('opciones') as FormArray;
  }



  handleRemoveOption(j: number) {
    console.log(" ",j);
    this.options.removeAt(j);
  }

  handleAddOption() {
    this.options.push(new FormGroup({
      nombre: new FormControl(''),
      costo: new FormControl(0, [Validators.min(0)])
    }))
  }
}
