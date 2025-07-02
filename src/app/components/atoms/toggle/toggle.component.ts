import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  value: boolean = false;
  @Input() text: string = "";
  @Output() onChange= new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  handleChange(){
    this.onChange.emit(this.value);
  }

}
