import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {SearchService} from "../../core/services/search.service";
import {Producto} from "../../core/models/udea.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private productoSubscription$!: Subscription;
  productos: Producto[] = [];
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.productoSubscription$ = this.searchService.productos$.subscribe(
      (productos)=>{
      this.productos = productos;
    })
  }

  ngOnDestroy(): void {
    if (this.productoSubscription$) {
      this.productoSubscription$.unsubscribe();
    }
  }

}
