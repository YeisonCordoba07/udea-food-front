import { Component, OnInit } from '@angular/core';
import { Categoria } from '@core/models/udea.model';
import { CategoriesService } from '@core/services/categories/categories.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

    categories$!: Observable<Categoria[]>;

    constructor(private categoriesService: CategoriesService) { }

    ngOnInit(): void {
        this.categories$ = this.categoriesService.getCategories();
    }

}
