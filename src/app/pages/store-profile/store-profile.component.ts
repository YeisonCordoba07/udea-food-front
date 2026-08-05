import { Component, Input, OnInit } from '@angular/core';
import { Tienda } from '@core/models/udea.model';

@Component({
  selector: 'app-store-profile',
  templateUrl: './store-profile.component.html',
  styleUrls: ['./store-profile.component.css']
})
export class StoreProfileComponent implements OnInit {

    @Input() tienda!: Tienda;

  constructor() { }

  ngOnInit(): void {
  }

}
