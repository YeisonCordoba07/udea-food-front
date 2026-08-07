import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageInfo } from '@core/models/udea.model';
import { FiltersService } from '@core/services/filters/filters.service';
import { SearchService } from '@core/services/search.service';

@Component({
    selector: 'app-pagination-button',
    templateUrl: './pagination-button.component.html',
    styleUrls: ['./pagination-button.component.css']
})
export class PaginationButtonComponent implements OnInit, OnDestroy {

    @Input() typePaginationButton: "next" | "previous" = "previous";

    private filterService = inject(FiltersService);
    private searchService = inject(SearchService);

    private paginationSubscription?: Subscription;
    private filtersSubscription?: Subscription;

    private currentPage = 0;
    paginationInfo: PageInfo = {
        page: 0,
        size: 0,
        totalElements: 0,
        totalPages: 0
    };



    constructor() { }



    ngOnInit(): void {

        this.paginationSubscription = this.searchService.pagination$.subscribe({
            next: (pageInfo) => {
                this.paginationInfo = pageInfo;
            },
            error: (e) => {
                console.log("ERROR EN PAGINACION BUTTON:", e)
            }
        });

        this.filtersSubscription = this.filterService.filters$.subscribe({
            next: (filters) => {
                this.currentPage = filters.page;
            },
            error: (e) => {
                console.log("ERROR EN PAGINACION BUTTON FILTROS:", e)
            }
        });
    }




    changePage(): void {
        let newPage = this.currentPage;

        if (this.typePaginationButton === "previous") {
            newPage = newPage - 1;
            this.filterService.changePage(newPage);

        } else if (this.typePaginationButton === "next") {
            newPage = newPage + 1;
            this.filterService.changePage(newPage);
        }
    }




    disabledButton(): boolean {
        const totalPages = this.paginationInfo.totalPages;

        if (this.typePaginationButton === "previous") {
            return this.currentPage <= 0;
        }

        if (this.typePaginationButton === "next") {
            return this.currentPage + 1 >= totalPages;
        }
        return false;
    }




    get buttonClasses(): string {
        const isDisabled = this.disabledButton();

        if (isDisabled) {
            return "bg-neutral-100 text-neutral-400 border-neutral-400 cursor-not-allowed";
        }

        return "bg-white border-neutral-400 text-black hover:bg-orange-100 hover:border-orange-500 hover:text-orange-500 hover:scale-110 cursor-pointer";
    }




    ngOnDestroy(): void {
        this.paginationSubscription?.unsubscribe();
        this.filtersSubscription?.unsubscribe();
    }

}
