import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  isOpen: boolean = false;
  @Input() options: string[] = [];
  @Input() selected!: string;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  handleFilterClick(filter: string) {
    this.selected = filter;
    this.toggleDropdown();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
