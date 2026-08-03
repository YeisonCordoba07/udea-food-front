import { Component, OnInit } from '@angular/core';
import { PaginationButtonComponent } from '@components/atoms/pagination-button/pagination-button.component';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changePage(): void{
    
  }

}
