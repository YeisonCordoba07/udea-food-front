import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter-element',
  templateUrl: './filter-element.component.html',
  styleUrls: ['./filter-element.component.css']
})
export class FilterElementComponent implements OnInit {
  @Input() options: string[] = [];
  @Input() selected: string = '';
  @Input() text: string = "";
  @Output() filterChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onOptionSelect(option: string): void {
    this.filterChange.emit(option);
  }

}
