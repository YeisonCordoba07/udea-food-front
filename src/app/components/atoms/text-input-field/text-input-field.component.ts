import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {AbstractControl, FormControl} from "@angular/forms";

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
  @Input() inputType: string = 'text';
  @Input() color: string = 'bg-gray-100';


  incrementValue(): void {
    /*if( this.inputType === 'number') {
      const value = this.formControlName.value;
      this.formControlName.setValue(value + 1);
    }*/

  }

  decrementValue(): void {
    /*if( this.inputType === 'number') {
      const value = this.formControlName.value;
      if (value - 1 > 0) {
        this.formControlName.setValue(value - 1);
      }
    }*/
  }


  constructor() { }

  ngOnInit(): void {
  }

}
