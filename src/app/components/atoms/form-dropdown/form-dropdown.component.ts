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
  showCreate: boolean = false;
  @Input() options: {value: string | number, label: string}[] = [];

  @Output() optionChange = new EventEmitter<number | string>();



  constructor() { }

  ngOnInit(): void {
  }

  handleFilterClick(label: string) {
    if(this.selected !== label) {
      this.selected = label;
      const selectedOption = this.options.find(option => option.label === label);
      this.optionChange.emit(selectedOption?.value);
    }
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
