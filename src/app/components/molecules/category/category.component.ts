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

    getIconName(nombre: string): string {
        const normalized = nombre.toLowerCase().trim();

        if (normalized.includes('rápida') || normalized.includes('rapida') || normalized.includes('hamburguesa')) {
            return 'hamburger';
        }

        if (normalized.includes('saludable')) {
            return 'leaf';
        }

        if (normalized.includes('casera')) {
            return 'home';
        }

        if (normalized.includes('internacional')) {
            return 'globe';
        }

        if (normalized.includes('desayuno')) {
            return 'sun';
        }

        if (normalized.includes('almuerzo')) {
            return 'lunch';
        }

        if (normalized.includes('cena')) {
            return 'moon';
        }

        if (normalized.includes('postre')) {
            return 'cake';
        }

        if (normalized.includes('bebida')) {
            return 'glass';
        }

        if (normalized.includes('parrilla')) {
            return 'meat';
        }

        if (normalized.includes('pescado')) {
            return 'fish';
        }

        if (normalized.includes('pasta')) {
            return 'utensils';
        }

        if (normalized.includes('pizza')) {
            return 'pizza';
        }

        if (normalized.includes('sushi')) {
            return 'chopsticks';
        }

        if (normalized.includes('mexicana')) {
            return 'camaron';
        }

        if (normalized.includes('asiática') || normalized.includes('asiatica')) {
            return 'chopsticks';
        }

        if (normalized.includes('ensalada')) {
            return 'apple';
        }

        if (normalized.includes('panadería') || normalized.includes('panaderia')) {
            return 'bread';
        }

        if (normalized.includes('helado')) {
            return 'iceCream';
        }

        return 'default';
    }

}
