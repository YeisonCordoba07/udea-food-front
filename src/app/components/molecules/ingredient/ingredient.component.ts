import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray} from "@angular/forms";

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  @Input() ingredientArray!: FormArray;
  @Input() indexIngrediente: number = 0;

  @Output() onChange = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

}
