import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-section-icon',
  templateUrl: './add-section-icon.component.html',
  styleUrls: ['./add-section-icon.component.css']
})
export class AddSectionIconComponent implements OnInit {

  @Input() size: string = '24px';
  @Input() strokeWidth: string = '2';


  constructor() { }

  ngOnInit(): void {
  }

}
