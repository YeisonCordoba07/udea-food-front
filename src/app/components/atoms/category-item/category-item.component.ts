import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FiltersService } from '@core/services/filters/filters.service';
import { SearchService } from '@core/services/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit, OnDestroy {

  @Input() text: string = "";
  activedCategory: string = "todas";
  routeSubscription!: Subscription;

  constructor(private router: Router, private searchService: SearchService, private route: ActivatedRoute, private filtersService: FiltersService) { }


  ngOnInit(): void {
    if (this.router.url.startsWith('/resultados')) {
      this.routeSubscription = this.route.queryParams.subscribe(params => {
        if (params["categoria"]) {
          this.activedCategory = params["categoria"];
        }
      });
    }
  }

  searchByCategoriaId(){

  }

  searchByNombreCategoria(){
    if(this.text.toLowerCase() !== "todas"){
        this.searchService.searchByNombreCategoria(this.text.toLowerCase());
    }
    this.router.navigate(["/resultados"]);
    this.filtersService.updateFilters("categoria", this.text.toLowerCase());
  }

  isActive():boolean{
    return this.activedCategory.toLocaleLowerCase() === this.text.toLocaleLowerCase();
  }


  ngOnDestroy(): void {
      if(this.routeSubscription){
        this.routeSubscription.unsubscribe();
      }
  }

}
