import {Component, Output, Input, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-empty-dialog',
  templateUrl: './empty-dialog.component.html',
  styleUrls: ['./empty-dialog.component.css']
})
export class EmptyDialogComponent implements OnInit {

  @Input() show: boolean = false;
  @Output() close = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.show = false;
    this.close.emit();
  }

}
