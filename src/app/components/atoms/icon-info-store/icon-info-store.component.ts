import { Component, Input, OnInit } from '@angular/core';
import { AppRoutingModule } from "app/app-routing.module";

@Component({
  selector: 'app-icon-info-store',
  templateUrl: './icon-info-store.component.html',
  styleUrls: ['./icon-info-store.component.css']
})
export class IconInfoStoreComponent implements OnInit {

    @Input() label: string = "";
    @Input() text: string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
