import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-filter-element',
  templateUrl: './filter-element.component.html',
  styleUrls: ['./filter-element.component.css']
})
export class FilterElementComponent implements OnInit {
  @Input() options: string[] = [];
  @Input() selected: string = '';
  @Input() text: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
