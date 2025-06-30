import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  @Output() onClose = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  handleClose() {
    this.onClose.emit();
  }
}
