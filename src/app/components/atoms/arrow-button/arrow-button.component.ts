import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-arrow-button',
  templateUrl: './arrow-button.component.html',
  styleUrls: ['./arrow-button.component.css']
})
export class ArrowButtonComponent implements OnInit {
  @Input() direction: 'left' | 'right' = 'right';

  @Output() onClick = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked(): void {
    this.onClick.emit();
  }

}
