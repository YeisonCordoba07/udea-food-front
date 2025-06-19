import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeButtonComponent } from './components/home-button/home-button.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryItemComponent } from './components/atoms/category-item/category-item.component';
import { CategoryComponent } from './components/molecules/category/category.component';
import { ArrowButtonComponent } from './components/atoms/arrow-button/arrow-button.component';
import { RightArrowIconComponent } from './components/atoms/icons/right-arrow-icon/right-arrow-icon.component';
import { LeftArrowIconComponent } from './components/atoms/icons/left-arrow-icon/left-arrow-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeButtonComponent,
    HomeComponent,
    CategoryItemComponent,
    CategoryComponent,
    ArrowButtonComponent,
    RightArrowIconComponent,
    LeftArrowIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
