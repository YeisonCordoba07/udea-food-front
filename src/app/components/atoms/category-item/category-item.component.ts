import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  @Input() text: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchByCategoriaId(){

  }

  searchByNombreCategoria(){
    this.router.navigate(["/resultados"], {
        queryParams: {categoria: this.text}
    })
  }

}
