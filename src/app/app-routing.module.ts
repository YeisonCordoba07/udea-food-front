// src/app/app-routing.module.ts

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "@pages/home/home.component";
import {SearchResultsComponent} from "@pages/search-results/search-results.component";
import {TiendaComponent} from "@pages/tienda/tienda.component";
import {LoginComponent} from "@pages/login/login.component";
import {CartComponent} from "@pages/cart/cart.component";
import {CreateProductComponent} from "@pages/create-product/create-product.component";


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'resultados', component: SearchResultsComponent
  },
  {
    path: 'tienda/:id', component: TiendaComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'carrito', component: CartComponent
  },
  {
    path: 'crear-producto', component: CreateProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
