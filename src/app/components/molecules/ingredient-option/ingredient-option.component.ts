import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ingredient-option',
  templateUrl: './ingredient-option.component.html',
  styleUrls: ['./ingredient-option.component.css']
})
export class IngredientOptionComponent implements OnInit {

  @Input() ingredient!: IngredientOptionComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
