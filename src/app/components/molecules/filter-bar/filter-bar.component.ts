import { Component, OnInit } from '@angular/core';
import {Filters} from "@core/models/udea.model";
import {emptyFilterState, filterOptions, initialFilterState} from "@core/constants/filter.constants";

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {

  filters: Filters = emptyFilterState;

  constructor() { }

  ngOnInit(): void {
    this.filters = initialFilterState;
  }

  protected readonly filterOptions = filterOptions;
}
