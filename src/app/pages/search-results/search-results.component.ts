import { Component, OnDestroy, OnInit } from '@angular/core';
import { Filters, Producto, Tienda } from "@core/models/udea.model";
import { initialFilterState } from "@core/constants/filter.constants";
import { Observable, Subscription } from "rxjs";
import { SearchService } from "@core/services/search.service";
import { FiltersService } from "@core/services/filters/filters.service";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit, OnDestroy {

    filters!: Filters;
    productos$!: Observable<Producto[]>;
    tiendas$!: Observable<Tienda[]>;

    private filtersSubscription$!: Subscription;



    constructor(
        private searchService: SearchService, 
        private filtersService: FiltersService,
        private route: ActivatedRoute) { }


    ngOnInit(): void {
        this.filtersSubscription$ = this.filtersService.filters$.subscribe({
            next: (f: Filters) => {
                this.filters = f;               
               
                this.searchService.searchByName(this.route.snapshot.queryParams["q"]);
               
                console.log("SNAPSHOT: ", this.route.snapshot.queryParams["q"]);
            }
        });
        this.productos$ = this.searchService.productos$;
        this.tiendas$ = this.searchService.tiendas$;

    }

    


    ngOnDestroy(): void {
        if (this.filtersSubscription$) {
            this.filtersSubscription$.unsubscribe();
        }
    }

}
