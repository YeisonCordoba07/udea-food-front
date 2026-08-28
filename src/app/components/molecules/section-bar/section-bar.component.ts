import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {SeccionTienda} from "@core/models/udea.model";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-section-bar',
  templateUrl: './section-bar.component.html',
  styleUrls: ['./section-bar.component.css']
})
export class SectionBarComponent implements OnInit {

  @Input() secciones: SeccionTienda[] = [];
  activeSection: string = "";
  @Input() control!: FormControl;

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

  switchSection(newSection: string): void{
    if(newSection !== this.activeSection){
        this.activeSection = newSection;
    }
  }

  openCreateSection() {

  }

  updateControl($event: string) {
    this.control.setValue($event);
  }
}
