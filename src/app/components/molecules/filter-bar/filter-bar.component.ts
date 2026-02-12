import {Component, OnDestroy, OnInit} from '@angular/core';
import {Filters} from "@core/models/udea.model";
import {filterOptions} from "@core/constants/filter.constants";
import {FiltersService} from "@core/services/filters/filters.service";
import {Subscription} from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit, OnDestroy {

  filters!: Filters;
  filterKeys: (keyof typeof filterOptions)[] = [];
  private subscription!: Subscription;
  protected readonly filterOptions = filterOptions;


  constructor(private filtersService: FiltersService, private router: Router) {}


  ngOnInit(): void {
    this.filterKeys = Object.keys(filterOptions) as (keyof typeof filterOptions)[];

    this.subscription = this.filtersService.filters$.subscribe(
      (filters: Filters) => {
        this.filters = filters;

        this.router.navigate(["/resultados"], {
        queryParams: filters,
        queryParamsHandling: 'merge',
    });
      }
    );
  }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  onFilterChange(filterKey: keyof typeof filterOptions, newValue: string): void {
    this.filtersService.updateFilters(filterKey, newValue);


    const currentFilters = { ...this.filters, [filterKey]: newValue };


    this.router.navigate(["/resultados"], {
        queryParams: currentFilters,
        queryParamsHandling: 'merge',
    });

  }

}
