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
  @Output() onDeleteIngredient = new EventEmitter<number>();


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
  get multiple():FormControl {
    return this.ingredientArray.get('multiple') as FormControl;
  }

  get obligatorio():FormControl {
    return this.ingredientArray.get('obligatorio') as FormControl;
  }

  get options(): FormArray{
    return this.ingredientArray.get('opciones') as FormArray;
  }


  get optionsArray(): { value: number; label: string }[] {
    return Array.from({ length: this.options.length }, (_, i) => i + 1)
      .filter(num => num >= this.minSeleccion.value && num <= this.options.length)
      .map(num => ({
        value: num,
        label: `${num}`,
      }));
  }





  showRespuestasMaximas(): boolean{
    return this.multiple.value === true;
  }

  showRespuestasMinimas(): boolean{
    return this.multiple.value === true && this.obligatorio.value === true
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



  handleMultipleOptions($event: boolean) {
    this.multiple.setValue($event);

    if(this.obligatorio.value && !$event){
      this.minSeleccion.setValue(1);
      this.maxSeleccion.setValue(1);

    }
    else if(!this.obligatorio.value && !$event){
      this.minSeleccion.setValue(0);
      this.maxSeleccion.setValue(1);
    }
  }

  handleObligatorio($event: boolean) {
    this.obligatorio.setValue($event);
    if($event && this.multiple.value){
      this.minSeleccion.setValue(1);
      this.maxSeleccion.setValue(this.options.length);
    }
    else if($event && this.multiple.value === false){
      this.minSeleccion.setValue(1);
      this.maxSeleccion.setValue(1);
    }
    else if($event === false && this.multiple.value === true){
      this.minSeleccion.setValue(0);
      this.maxSeleccion.setValue(this.options.length);
    }
    else if ($event === false && this.multiple.value === false){
      this.minSeleccion.setValue(0);
      this.maxSeleccion.setValue(1);
    }
  }

  handleMaxSeleccionChange(selectedValue: number | string): void {
    this.maxSeleccion.setValue(selectedValue);
  }



  deleteIngredient(): void{
    this.onDeleteIngredient.emit(this.indexIngrediente);
  }


}
