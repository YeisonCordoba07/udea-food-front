import { Component, OnInit } from '@angular/core';
import {Filters} from "@core/models/udea.model";
import {initialFilterState} from "@core/constants/filter.constants";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  filters: Filters = initialFilterState;
  productos: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
