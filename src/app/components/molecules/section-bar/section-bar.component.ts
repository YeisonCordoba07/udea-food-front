import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {SeccionTienda} from "@core/models/udea.model";

@Component({
  selector: 'app-section-bar',
  templateUrl: './section-bar.component.html',
  styleUrls: ['./section-bar.component.css']
})
export class SectionBarComponent implements OnInit {

  @Input() secciones: SeccionTienda[] = [];
  activeSection: string = "";

  @ViewChild('sectionContainer', { static: true }) sectionContainer!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  scrollLeft(): void {
    this.sectionContainer.nativeElement.scrollBy({ left: -100, behavior: 'smooth' });
  }

  scrollRight(): void {
    this.sectionContainer.nativeElement.scrollBy({ left: 100, behavior: 'smooth' });
  }

}
