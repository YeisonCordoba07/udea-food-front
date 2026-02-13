import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '@core/services/search.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  @Input() text: string = "";

  constructor(private router: Router, private searchService: SearchService) { }

  ngOnInit(): void {
  }

  searchByCategoriaId(){

  }

  searchByNombreCategoria(){
    this.searchService.searchByNombreCategoria(this.text.toLowerCase());
    this.router.navigate(["/resultados"], {
        queryParams: {categoria: this.text.toLowerCase()},
        queryParamsHandling: "merge"
    })
  }

}
