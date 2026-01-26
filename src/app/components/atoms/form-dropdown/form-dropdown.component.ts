import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form-dropdown',
  templateUrl: './form-dropdown.component.html',
  styleUrls: ['./form-dropdown.component.css']
})
export class FormDropdownComponent implements OnInit {
  @Input() subtitle: string = "";
  selected: string = "";
  isOpen: boolean = false;
  @Input() options: {value: string | number, label: string}[] = [];
  @Input() initialValue: string | number | undefined;
  @Input() isValid: boolean = true;
  @Input() errorMessage: string | undefined;

  @Output() optionChange = new EventEmitter<number | string>();
  @Input() showCreateSection: boolean = true;



  constructor() { }

  ngOnInit(): void {
    if(this.initialValue){
      const foundOption = this.options.find(option => option.value === this.initialValue);

      this.selected = foundOption ? foundOption.label : '';
    }
  }

  handleFilterClick(label: string) {
    if(this.selected !== label) {
      this.selected = label;
      const selectedOption = this.options.find(option => option.label === label);
      this.optionChange.emit(selectedOption?.value);
      this.isOpen = false;
    }
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
