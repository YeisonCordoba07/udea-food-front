import { Component, Input, OnInit } from '@angular/core';
import { Tienda } from '@core/models/udea.model';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.css']
})
export class StoreCardComponent implements OnInit {
  @Input() src: string = 'assets/images/food1.jpg';
  @Input() tienda!: Tienda;

  
  constructor() { }

  ngOnInit(): void {
  }

}
