import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-multi-dropdown',
  templateUrl: './multi-dropdown.component.html',
  styleUrls: ['./multi-dropdown.component.css']
})
export class MultiDropdownComponent implements OnInit {

  @Input() title: string = "";
  isOpen: boolean = false;
  selected: string[] = [];
  @Input() maxSelected: number = 3;
  @Input() options: {value: string | number, label: string}[] = [];

  @Output() optionChange = new EventEmitter<(string | number)[]>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  handleFilterClick(label: string) {
    const isSelected = this.selected.includes(label);
    if(this.selected.length >= this.maxSelected && !isSelected) {
      return; // Prevent selecting more than maxSelected
    }
    if(isSelected) {
      this.selected = this.selected.filter(item => item !== label);
    } else {
      this.selected.push(label);
    }

    const selectedValues: (string | number)[] = this.options
      .filter(option => this.selected.includes(option.label))
      .map(option => option.value);
    this.optionChange.emit(selectedValues);


  }
}
