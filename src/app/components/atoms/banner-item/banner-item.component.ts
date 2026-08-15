import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-item',
  templateUrl: './banner-item.component.html',
  styleUrls: ['./banner-item.component.css']
})
export class BannerItemComponent implements OnInit {

    @Input() title: string = "";
    @Input() subtitle: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
