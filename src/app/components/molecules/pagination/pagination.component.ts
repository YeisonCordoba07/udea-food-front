import { Component, inject, OnInit } from '@angular/core';
import { Filters, PageInfo } from '@core/models/udea.model';
import { FiltersService } from '@core/services/filters/filters.service';
import { SearchService } from '@core/services/search.service';
import { map, Observable } from 'rxjs';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {


    filtros$!: Observable<number>;
    pageInfo$!: Observable<number>;

    private filtroService = inject(FiltersService);
    private searchService = inject(SearchService);

    
  constructor() { }

  ngOnInit(): void {
    this.filtros$ = this.filtroService.filters$.pipe(
        map(f =>{
            return f.page +1
        })
    );

    this.pageInfo$ = this.searchService.pagination$.pipe(map(p=>p.totalPages));
  }


}
