import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {EmptyDialogComponent} from "@components/atoms/empty-dialog/empty-dialog.component";
import {TiendaService} from "@core/services/tienda/tienda.service";

@Component({
  selector: 'app-create-section-dialog',
  templateUrl: './create-section-dialog.component.html',
  styleUrls: ['./create-section-dialog.component.css']
})
export class CreateSectionDialogComponent implements OnInit {

  @Input() style: 'primary' | 'secondary' = 'primary';
  @Input() buttonWidth: 'full' | 'custom' = 'full';

  sectionName = new FormControl('', [Validators.required]);

  @ViewChild(EmptyDialogComponent) emptyDialog!: EmptyDialogComponent;
  constructor(private tiendaService: TiendaService) { }



  ngOnInit(): void {
  }


  handleSubmit() {
    this.tiendaService.createSeccion(this.sectionName.value || '').subscribe({
      next: (response) =>{
        this.recargarPagina();
        this.closeDialog();
      },
      error: (error) => {
        console.error('Error creating sección:', error);
      }
    })
  }



  closeDialog() {
    this.emptyDialog.closeDialog();
  }

  openDialog() {
    this.emptyDialog.openDialog();
  }



  recargarPagina() {
    window.location.reload();
  }
}
