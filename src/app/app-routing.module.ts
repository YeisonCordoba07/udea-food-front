// src/app/app-routing.module.ts

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "@pages/home/home.component";
import {SearchResultsComponent} from "@pages/search-results/search-results.component";
import {TiendaComponent} from "@pages/tienda/tienda.component";
import {LoginComponent} from "@pages/login/login.component";
import {CartComponent} from "@pages/cart/cart.component";
import {CreateProductComponent} from "@pages/create-product/create-product.component";
import {AuthGuard} from "@core/guard/auth.guard";
import {TypeAccountGuard} from "@core/guard/type-account.guard";
import {LoginGuard} from "@core/guard/login.guard";


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
    path: 'login', component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'carrito', component: CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'crear-producto', component: CreateProductComponent,
    canActivate: [AuthGuard, TypeAccountGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
