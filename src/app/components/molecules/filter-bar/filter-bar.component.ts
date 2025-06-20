import {Component, OnDestroy, OnInit} from '@angular/core';
import {Filters} from "@core/models/udea.model";
import {filterOptions} from "@core/constants/filter.constants";
import {FiltersService} from "@core/services/filters/filters.service";
import {Subscription} from "rxjs";

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


  constructor(private filtersService: FiltersService) {}


  ngOnInit(): void {
    this.filterKeys = Object.keys(filterOptions) as (keyof typeof filterOptions)[];

    this.subscription = this.filtersService.filters$.subscribe(
      (filters: Filters) => {
        this.filters = filters;
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
  }

}
