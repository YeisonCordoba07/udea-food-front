import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {EmptyDialogComponent} from "@components/atoms/empty-dialog/empty-dialog.component";

@Component({
  selector: 'app-create-section-dialog',
  templateUrl: './create-section-dialog.component.html',
  styleUrls: ['./create-section-dialog.component.css']
})
export class CreateSectionDialogComponent implements OnInit {

  sectionName = new FormControl('', [Validators.required]);

  @ViewChild(EmptyDialogComponent) emptyDialog!: EmptyDialogComponent;
  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit() {

  }
  closeDialog() {
    this.emptyDialog.closeDialog();
  }

  openDialog() {
    this.emptyDialog.openDialog();
  }
}
