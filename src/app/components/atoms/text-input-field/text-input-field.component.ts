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
  @Input() inputType: string = 'text';
  @Input() color: string = 'bg-gray-100';


  incrementValue(): void {
    if (this.inputType === 'number') {
      let value = Number(this.control.value);
      if (isNaN(value)) value = 0;
      this.control.setValue(value + 1);
    }
  }

  decrementValue(): void {
    if (this.inputType === 'number') {
      let value = Number(this.control.value);
      if (isNaN(value)) value = 0;
      if (value > 0) {
        this.control.setValue(value - 1);
      }
    }
  }



  constructor() { }

  ngOnInit(): void {
  }

}
