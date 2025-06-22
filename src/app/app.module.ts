import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeButtonComponent } from '@components/molecules/home-button/home-button.component';
import { HomeComponent } from '@pages/home/home.component';
import { CategoryItemComponent } from '@components/atoms/category-item/category-item.component';
import { CategoryComponent } from '@components/molecules/category/category.component';
import { ArrowButtonComponent } from '@components/atoms/arrow-button/arrow-button.component';
import { RightArrowIconComponent } from '@components/atoms/icons/right-arrow-icon/right-arrow-icon.component';
import { LeftArrowIconComponent } from '@components/atoms/icons/left-arrow-icon/left-arrow-icon.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { NavbarComponent } from '@shared/navbar/navbar.component';
import { PrincipalButtonComponent } from '@components/atoms/principal-button/principal-button.component';
import { ShoppingCartIconComponent } from '@components/atoms/icons/shopping-cart-icon/shopping-cart-icon.component';
import { SearchBarComponent } from '@components/atoms/search-bar/search-bar.component';
import {FormsModule} from "@angular/forms";
import { SearchIconComponent } from '@components/atoms/icons/search-icon/search-icon.component';
import {HttpClientModule} from "@angular/common/http";
import { SearchResultsComponent } from '@pages/search-results/search-results.component';
import { FilterBarComponent } from '@components/molecules/filter-bar/filter-bar.component';
import { FilterElementComponent } from '@components/atoms/filter-element/filter-element.component';
import { DropdownComponent } from '@components/atoms/dropdown/dropdown.component';
import { DownArrowIconComponent } from '@components/atoms/icons/down-arrow-icon/down-arrow-icon.component';
import { ProductCardComponent } from './components/molecules/product-card/product-card.component';
import { EmptyDialogComponent } from './components/atoms/empty-dialog/empty-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeButtonComponent,
    HomeComponent,
    CategoryItemComponent,
    CategoryComponent,
    ArrowButtonComponent,
    RightArrowIconComponent,
    LeftArrowIconComponent,
    FooterComponent,
    NavbarComponent,
    PrincipalButtonComponent,
    ShoppingCartIconComponent,
    SearchBarComponent,
    SearchIconComponent,
    SearchResultsComponent,
    FilterBarComponent,
    FilterElementComponent,
    DropdownComponent,
    DownArrowIconComponent,
    ProductCardComponent,
    EmptyDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
