import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../core/services/search.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private readonly searchService: SearchService) { }

  ngOnInit(): void {
  }

  search(query: string): void {
    this.searchService.searchByName(query).subscribe(
      {
        next: (response) => {
          console.log('Search results:', response);
          // Aquí puedes manejar los resultados de la búsqueda
        },
        error: (error) => {
          console.error('Error during search:', error);
          // Aquí puedes manejar el error de la búsqueda
        }
      }
    );
  }

}
