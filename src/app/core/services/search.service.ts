import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from "@angular/common/http";


import { BehaviorSubject, Subscription } from 'rxjs';
import { API_ROUTES } from "@core/constants/routes.constants";
import { Filters, PageInfo, Producto, ProductoSearchResult, Tienda, TiendaSearchResult } from "@core/models/udea.model";
import { FiltersService } from './filters/filters.service';
import { emptyPageInfo, filterOptions } from '@core/constants/filter.constants';
import { PRODUCTO } from '@core/constants/services.constants';


@Injectable({
    providedIn: 'root'
})
export class SearchService implements OnDestroy {
    private productosSubject = new BehaviorSubject<Producto[]>([]);
    productos$ = this.productosSubject.asObservable();

    private tiendasSubject = new BehaviorSubject<Tienda[]>([]);
    tiendas$ = this.tiendasSubject.asObservable();

    private paginationSubject = new BehaviorSubject<PageInfo>(emptyPageInfo);
    pagination$ = this.paginationSubject.asObservable();

    private filterSubscription$!: Subscription;

    constructor(private readonly http: HttpClient, private filtersService: FiltersService) { }





    searchByName(query: string): void {

        let currentFilters!: Filters;

        this.filterSubscription$ = this.filtersService.filters$.subscribe(f => {
            currentFilters = f;
        });


        if (currentFilters.mostrarSolo === filterOptions.mostrarSolo[0]) {

            this.http.get<ProductoSearchResult>(`${API_ROUTES.SEARCH_PRODUCT_BY_NAME_URL}?nombre=${query}&mostrarSolo=${currentFilters.mostrarSolo}&buscarEn=${currentFilters.buscarEn}&ordenarPor=${currentFilters.ordenarPor}&tipoOrden=${currentFilters.tipoOrden}&page=${currentFilters.page}&size=${currentFilters.size}&categoria=${currentFilters.categoria}`)
                .subscribe({
                    next: (productos) => {
                        this.tiendasSubject.next([])
                        this.productosSubject.next(productos.results);
                        this.setPaginationInfo(productos);
                    },
                    error: (error) => {
                        console.error('Error fetching products:', error);
                    }
                });

        } else if (currentFilters.mostrarSolo === filterOptions.mostrarSolo[1]) {

            this.http.get<TiendaSearchResult>(`${API_ROUTES.SEARCH_TIENDAS_BY_NAME_URL}?nombre=${query}&mostrarSolo=${currentFilters.mostrarSolo}&buscarEn=${currentFilters.buscarEn}&ordenarPor=${currentFilters.ordenarPor}&tipoOrden=${currentFilters.tipoOrden}&page=${currentFilters.page}&size=${currentFilters.size}&categoria=${currentFilters.categoria}`)
                .subscribe({
                    next: (tiendas) => {
                        console.log("---TIENDAS: ", tiendas)
                        this.productosSubject.next([]);
                        this.tiendasSubject.next(tiendas.results);
                        this.setPaginationInfo(tiendas);
                    },
                    error: (error) => {
                        console.error('Error fetching stores:', error);
                    }
                });
        }
    }



    setPaginationInfo(pageResut: TiendaSearchResult | ProductoSearchResult): void {
        let pageInfo = {
            page: 0,
            size: 0,
            totalElements: 0,
            totalPages: 0
        }
        pageInfo.page = pageResut.page;
        pageInfo.size = pageResut.size;
        pageInfo.totalElements = pageResut.totalElements;
        pageInfo.totalPages = pageResut.totalPages;
        this.paginationSubject.next(pageInfo);
    }

    getPaginationInfo(): PageInfo {
        return this.paginationSubject.getValue();
    }



    searchByIdCategoria(idCategoria: number) {
        return this.http.get<Producto[]>(`${PRODUCTO.SEARCH_PRODUCTS_BY_ID_CATEGORIA}?idCategoria=${idCategoria}`);
    }



    searchByNombreCategoria(nombreCategoria: string) {
        return this.http.get<Producto[]>(`${PRODUCTO.SEARCH_PRODUCTS_BY_CATEGORIA_NAME}?categoria=${nombreCategoria}`).subscribe({
            next: (p: Producto[]) => {
                this.productosSubject.next(p);
            }
        });
    }



    ngOnDestroy(): void {
        if (this.filterSubscription$) {
            this.filterSubscription$.unsubscribe();
        }
        this.tiendasSubject.next([]);
        this.productosSubject.next([]);
        this.paginationSubject.next(emptyPageInfo);

    }


    

        //   searchByName2(query: string): void {
    //         if(query === ""){
    //         return
    //     }
    //     let currentFilters!: Filters;

    //     this.filterSubscription$ = this.filtersService.filters$.subscribe(f => {
    //         currentFilters = f;
    //     });

    //     let url = this.defineUrl(currentFilters)

    //     if(url){

    //         this.http.get<Producto[] | Tienda[]>(`${url}?nombre=${query}&mostrarSolo=${currentFilters.mostrarSolo}&buscarEn=${currentFilters.buscarEn}&ordenarPor=${currentFilters.ordenarPor}&tipoOrden=${currentFilters.tipoOrden}`).subscribe(res=>{
    //             this.results.next(res);
    //         });
    //     }else{
    //         console.log("En search service no se definió la URL.");
    //     }

    //   }


    //   private defineUrl(currentFilters: Filters){
    //     if(currentFilters.mostrarSolo === filterOptions.mostrarSolo[0]){

    //         return API_ROUTES.SEARCH_PRODUCT_BY_NAME_URL

    //     }else if(currentFilters.mostrarSolo === filterOptions.mostrarSolo[1]){

    //         return API_ROUTES.SEARCH_TIENDAS_BY_NAME_URL

    //     }else{

    //         return undefined
    //     }
    //   }

}
