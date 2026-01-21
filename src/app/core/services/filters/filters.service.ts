import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {initialFilterState} from "@core/constants/filter.constants";

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  private filters = new BehaviorSubject(initialFilterState);
  filters$ = this.filters.asObservable();

  constructor() {
  }

  updateFilters(filterName: string, value: string) {
    const currentFilters = this.filters.getValue();
    const updatedFilters = {...currentFilters, [filterName]: value};

    this.filters.next(updatedFilters);
    console.log("nuevo", this.filters.getValue());
  }

  getCurrentFilters() {
    return this.filters.getValue();
  }

}
