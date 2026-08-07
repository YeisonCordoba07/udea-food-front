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

  updateFilters(filterName: string, value: string | number) {
    const currentFilters = this.filters.getValue();
    const updatedFilters = {...currentFilters, [filterName]: value};
    updatedFilters.page = 0;

    this.filters.next(updatedFilters);
    console.log("FILTER.SERVICE nuevo: ", this.filters.getValue());
  }

  getCurrentFilters() {
    return this.filters.getValue();
  }

  changePage(newPage: number){
    let tempFilters =  this.filters.getValue();
    tempFilters.page = newPage;
    this.filters.next(tempFilters);
  }

//   restartPage(){
//     let tempFilters = this.filters.getValue();
//     tempFilters.page = 0;
//     this.filters.next(tempFilters);
//   }

}
