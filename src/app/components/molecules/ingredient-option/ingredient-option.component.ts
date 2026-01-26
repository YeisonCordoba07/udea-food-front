import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'app-ingredient-option',
  templateUrl: './ingredient-option.component.html',
  styleUrls: ['./ingredient-option.component.css']
})
export class IngredientOptionComponent implements OnInit {

  @Input() options!: AbstractControl;
  @Output() onDelete = new EventEmitter<void>();
  @Input() multiple!: AbstractControl;

  constructor() { }

  ngOnInit(): void {
  }

  get nombre(): FormControl {
    return this.options.get('nombre') as FormControl;
  }
  get costo(): FormControl {
    return this.options.get('costo') as FormControl;
  }

  get isMultiple(): boolean{
    return this.multiple.value;
  }

  handleRemoveOption() {
    this.onDelete.emit();
  }
}
