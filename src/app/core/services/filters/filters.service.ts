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

  updateFilters(value: string, newFilter: string) {
    const currentFilters = this.filters.getValue();
    const updatedFilters = {...currentFilters, [value]: newFilter};

    this.filters.next(updatedFilters);
    console.log("nuevo", this.filters.getValue());
  }
}
