import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl} from "@angular/forms";

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

}
