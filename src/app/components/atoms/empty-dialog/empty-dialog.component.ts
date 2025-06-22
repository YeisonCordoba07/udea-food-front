import {Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-dialog',
  templateUrl: './empty-dialog.component.html',
  styleUrls: ['./empty-dialog.component.css']
})
export class EmptyDialogComponent implements OnInit {

  @Input() show: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  openDialog(){
    this.show = true;
  }

  closeDialog() {
    this.show = false;
  }

}
