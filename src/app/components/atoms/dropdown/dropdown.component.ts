import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  isOpen: boolean = false;
  @Input() options: string[] = [];
  @Input() selected!: string;
  @Output() optionChange = new EventEmitter<string>();


  constructor(private elementRef: ElementRef) { }


  ngOnInit(): void {
  }


  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }


  handleFilterClick(filter: string) {
    if(this.selected !== filter) {
      this.selected = filter;
      this.optionChange.emit(filter);
    }
    this.toggleDropdown();
  }


  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
