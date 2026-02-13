import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '@core/services/search.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  @Input() text: string = "";
  activedCategory: string = "todas";

  constructor(private router: Router, private searchService: SearchService, private route: ActivatedRoute) { }

  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
        this.activedCategory = params["categoria"];
    })
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
