import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.css']
})
export class HomeButtonComponent implements OnInit {
    @Input() href: string = '#';
    @Input() srcImage: string = "";
    @Input() text: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
