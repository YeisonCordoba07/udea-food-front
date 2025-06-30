import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeButtonComponent} from '@components/molecules/home-button/home-button.component';
import {HomeComponent} from '@pages/home/home.component';
import {CategoryItemComponent} from '@components/atoms/category-item/category-item.component';
import {CategoryComponent} from '@components/molecules/category/category.component';
import {ArrowButtonComponent} from '@components/atoms/arrow-button/arrow-button.component';
import {RightArrowIconComponent} from '@components/atoms/icons/right-arrow-icon/right-arrow-icon.component';
import {LeftArrowIconComponent} from '@components/atoms/icons/left-arrow-icon/left-arrow-icon.component';
import {FooterComponent} from '@shared/footer/footer.component';
import {NavbarComponent} from '@shared/navbar/navbar.component';
import {PrincipalButtonComponent} from '@components/atoms/principal-button/principal-button.component';
import {ShoppingCartIconComponent} from '@components/atoms/icons/shopping-cart-icon/shopping-cart-icon.component';
import {SearchBarComponent} from '@components/atoms/search-bar/search-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchIconComponent} from '@components/atoms/icons/search-icon/search-icon.component';
import {HttpClientModule} from "@angular/common/http";
import {SearchResultsComponent} from '@pages/search-results/search-results.component';
import {FilterBarComponent} from '@components/molecules/filter-bar/filter-bar.component';
import {FilterElementComponent} from '@components/atoms/filter-element/filter-element.component';
import {DropdownComponent} from '@components/atoms/dropdown/dropdown.component';
import {DownArrowIconComponent} from '@components/atoms/icons/down-arrow-icon/down-arrow-icon.component';
import {ProductCardComponent} from '@components/molecules/product-card/product-card.component';
import {EmptyDialogComponent} from '@components/atoms/empty-dialog/empty-dialog.component';
import {ProductCardDetailComponent} from '@components/molecules/product-card-detail/product-card-detail.component';
import {TiendaComponent} from '@pages/tienda/tienda.component';
import {RouterLink} from "@angular/router";
import {SectionBarComponent} from '@components/molecules/section-bar/section-bar.component';
import {PerfilTiendaComponent} from '@components/molecules/perfil-tienda/perfil-tienda.component';
import {StarIconComponent} from '@components/atoms/icons/star-icon/star-icon.component';
import {MapPinIconComponent} from '@components/atoms/icons/map-pin-icon/map-pin-icon.component';
import {LoginComponent} from '@pages/login/login.component';
import {TextInputFieldComponent} from '@components/atoms/text-input-field/text-input-field.component';
import {AddSectionIconComponent} from '@components/atoms/icons/add-section-icon/add-section-icon.component';
import {MinusIconComponent} from '@components/atoms/icons/minus-icon/minus-icon.component';
import {
  AddCircleDashedIconComponent
} from '@components/atoms/icons/add-circle-dashed-icon/add-circle-dashed-icon.component';
import {StoreIconComponent} from '@components/atoms/icons/store-icon/store-icon.component';
import {AccountMenuComponent} from '@components/molecules/account-menu/account-menu.component';
import {AccountMenuItemComponent} from '@components/atoms/account-menu-item/account-menu-item.component';
import {SettingIconComponent} from '@components/atoms/icons/setting-icon/setting-icon.component';
import {PenEditIconComponent} from '@components/atoms/icons/pen-edit-icon/pen-edit-icon.component';
import {LogOutIconComponent} from '@components/atoms/icons/log-out-icon/log-out-icon.component';
import {MiniCartComponent} from '@components/molecules/cart/mini-cart.component';
import {CartComponent} from '@pages/cart/cart.component';
import {ClickOutsideDirective} from './core/directives/click-outside.directive';
import {CreateProductComponent} from './pages/create-product/create-product.component';
import {MultiDropdownComponent} from './components/atoms/multi-dropdown/multi-dropdown.component';
import {TagComponent} from './components/atoms/tag/tag.component';
import {FormDropdownComponent} from './components/atoms/form-dropdown/form-dropdown.component';

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
    EmptyDialogComponent,
    ProductCardDetailComponent,
    TiendaComponent,
    SectionBarComponent,
    PerfilTiendaComponent,
    StarIconComponent,
    MapPinIconComponent,
    LoginComponent,
    TextInputFieldComponent,
    AddSectionIconComponent,
    MinusIconComponent,
    AddCircleDashedIconComponent,
    StoreIconComponent,
    AccountMenuComponent,
    AccountMenuItemComponent,
    SettingIconComponent,
    PenEditIconComponent,
    LogOutIconComponent,
    MiniCartComponent,
    CartComponent,
    ClickOutsideDirective,
    CreateProductComponent,
    MultiDropdownComponent,
    TagComponent,
    FormDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterLink,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
