import {Component, Input, OnInit,} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-text-input-field',
  templateUrl: './text-input-field.component.html',
  styleUrls: ['./text-input-field.component.css']
})
export class TextInputFieldComponent implements OnInit {

  @Input() control!: FormControl;
  @Input() label: string = '';
  @Input() placeholder: string = 'Escriba texto';
  @Input() errorMessage: string = '';
  @Input() inputType: 'text' | 'number' | 'password' | 'textarea' = 'text';
  @Input() color: string = 'bg-gray-100';
  @Input() minValue: number | undefined;
  @Input() maxValue: number | undefined;


  calculateValue(step: 1 | -1){
    if (this.inputType !== 'number') {
      return
    }

    let value = Number(this.control.value) || 0;

    let newValue = 0;
    if(step === 1){
      newValue = this.maxValue !== undefined
        ? Math.min(value + 1, this.maxValue)
        : value + 1;

    }else if(step === -1){
      newValue = this.minValue !== undefined
        ? Math.max(value - 1, this.minValue)
        : value - 1;
    }else{
      throw new Error('El valor debe ser 1 o -1');
    }
    this.control.setValue(newValue);
  }


  incrementValue(): void {
    this.calculateValue(1);
  }

  decrementValue(): void {
    this.calculateValue(-1);
  }



  constructor() { }

  ngOnInit(): void {
  }

}
