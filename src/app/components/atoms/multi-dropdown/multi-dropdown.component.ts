import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-multi-dropdown',
  templateUrl: './multi-dropdown.component.html',
  styleUrls: ['./multi-dropdown.component.css']
})
export class MultiDropdownComponent implements OnInit {

  @Input() title: string = "";
  isOpen: boolean = false;
  @Input() selected!: string;
  @Input() maxSelected: number = 3;
  @Input() options: {value: string | number, label: string}[] = [];

  @Output() optionChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
