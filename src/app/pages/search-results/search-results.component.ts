import {Component, OnDestroy, OnInit} from '@angular/core';
import {Filters, Producto} from "@core/models/udea.model";
import {initialFilterState} from "@core/constants/filter.constants";
import {Subscription} from "rxjs";
import {SearchService} from "@core/services/search.service";
import {FiltersService} from "@core/services/filters/filters.service";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit, OnDestroy {

  private filtersSubscription$!: Subscription;
  filters: Filters = initialFilterState;

  private productoSubscription$!: Subscription;
  productos: Producto[] = [];


  constructor(private searchService: SearchService, private filtersService: FiltersService) { }


  ngOnInit(): void {
    this.productoSubscription$ = this.searchService.productos$.subscribe(
      (productos)=>{
        this.productos = productos;
      });

    this.filtersSubscription$ = this.filtersService.filters$.subscribe(
      (filters: Filters) => {
        this.filters = filters;
      }
    )
  }


  ngOnDestroy(): void {
    if (this.productoSubscription$) {
      this.productoSubscription$.unsubscribe();
    }
    if (this.filtersSubscription$) {
      this.filtersSubscription$.unsubscribe();
    }
  }

}
