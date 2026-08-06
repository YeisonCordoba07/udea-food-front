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
import {CreateSectionDialogComponent} from './components/atoms/create-section-dialog/create-section-dialog.component';
import {IngredientOptionComponent} from './components/molecules/ingredient-option/ingredient-option.component';
import {ToggleComponent} from './components/atoms/toggle/toggle.component';
import {IngredientComponent} from './components/molecules/ingredient/ingredient.component';
import {CloseIconComponent} from './components/atoms/icons/close-icon/close-icon.component';
import {TrashIconComponent} from './components/atoms/icons/trash-icon/trash-icon.component';
import { PaginationComponent } from './components/molecules/pagination/pagination.component';
import { PaginationButtonComponent } from '@components/atoms/pagination-button/pagination-button.component';
import { StoreCardComponent } from './components/molecules/store-card/store-card.component';
import { WatchIconComponent } from './components/atoms/icons/watch-icon/watch-icon.component';
import { MapPinOutlineIconComponent } from './components/atoms/icons/map-pin-outline-icon/map-pin-outline-icon.component';
import { HeartOutlineIconComponent } from './components/atoms/icons/heart-outline-icon/heart-outline-icon.component';
import { StoreProfileComponent } from './pages/store-profile/store-profile.component';
import { PhoneFilledIconsComponent } from './components/atoms/icons/phone-filled-icons/phone-filled-icons.component';
import { MopedIconsComponent } from './components/atoms/icons/moped-icons/moped-icons.component';
import { CalendarIconComponent } from './components/atoms/icons/calendar-icon/calendar-icon.component';
import { IconInfoStoreComponent } from './components/atoms/icon-info-store/icon-info-store.component';
import { GridIconComponent } from './components/atoms/icons/grid-icon/grid-icon.component';
import { HamburgerIconComponent } from './components/atoms/icons/hamburger-icon/hamburger-icon.component';
import { LeafIconComponent } from './components/atoms/icons/leaf-icon/leaf-icon.component';
import { HomeIconComponent } from './components/atoms/icons/home-icon/home-icon.component';
import { GlobeIconComponent } from './components/atoms/icons/globe-icon/globe-icon.component';
import { SunIconComponent } from './components/atoms/icons/sun-icon/sun-icon.component';
import { LuchIconComponent } from '@components/atoms/icons/luch-icon/lunch-icon.component';
import { MoonIconComponent } from './components/atoms/icons/moon-icon/moon-icon.component';
import { CakeIconComponent } from './components/atoms/icons/cake-icon/cake-icon.component';
import { GlassIconComponent } from './components/atoms/icons/glass-icon/glass-icon.component';
import { MeatIconComponent } from './components/atoms/icons/meat-icon/meat-icon.component';
import { FishIconComponent } from './components/atoms/icons/fish-icon/fish-icon.component';
import { PizzaIconComponent } from './components/atoms/icons/pizza-icon/pizza-icon.component';
import { CamaronIconComponent } from './components/atoms/icons/camaron-icon/camaron-icon.component';
import { UtensilsIconComponent } from './components/atoms/icons/utensils-icon/utensils-icon.component';
import { ChopsticksIconComponent } from './components/atoms/icons/chopsticks-icon/chopsticks-icon.component';
import { AppleIconComponent } from './components/atoms/icons/apple-icon/apple-icon.component';
import { BreadIconComponent } from './components/atoms/icons/bread-icon/bread-icon.component';
import { IceCreamConeIconComponent } from './components/atoms/icons/ice-cream-cone-icon/ice-cream-cone-icon.component';



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
    FormDropdownComponent,
    CreateSectionDialogComponent,
    IngredientOptionComponent,
    ToggleComponent,
    IngredientComponent,
    CloseIconComponent,
    TrashIconComponent,
    PaginationComponent,
    PaginationButtonComponent,
    StoreCardComponent,
    WatchIconComponent,
    MapPinOutlineIconComponent,
    HeartOutlineIconComponent,
    StoreProfileComponent,
    PhoneFilledIconsComponent,
    MopedIconsComponent,
    CalendarIconComponent,
    IconInfoStoreComponent,
    GridIconComponent,
    HamburgerIconComponent,
    LeafIconComponent,
    HomeIconComponent,
    GlobeIconComponent,
    SunIconComponent,
    LuchIconComponent,
    MoonIconComponent,
    CakeIconComponent,
    GlassIconComponent,
    MeatIconComponent,
    FishIconComponent,
    PizzaIconComponent,
    CamaronIconComponent,
    UtensilsIconComponent,
    ChopsticksIconComponent,
    AppleIconComponent,
    BreadIconComponent,
    IceCreamConeIconComponent,
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
