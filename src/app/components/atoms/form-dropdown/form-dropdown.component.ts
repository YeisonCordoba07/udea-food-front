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

  @Output() optionChange = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }

  handleFilterClick(label: string) {
    if(this.selected !== label) {
      this.selected = label;
      this.optionChange.emit();
    }
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
