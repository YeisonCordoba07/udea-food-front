import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { Tienda } from '@core/models/udea.model';
import { SearchService } from '@core/services/search.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    tiendas$!: Observable<Tienda[]>;

    private searchService = inject(SearchService);


    @ViewChild('storeBar', {static: true}) storeBar!: ElementRef;

    ngOnInit(): void {
        this.tiendas$ = this.searchService.searchAllStores();
    }

    scrollLeft(): void {
        this.storeBar.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
    }

    scrollRight(): void {
        this.storeBar.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
    }






}
