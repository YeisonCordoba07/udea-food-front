import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input() placeholder: string = 'Buscar...';
  @Input() backgroundColor: string = 'bg-zinc-100';
  @Output() search = new EventEmitter<string>();

  searchQuery: string = '';

  handleSearch(event: Event): void {
    event.preventDefault();
    this.search.emit(this.searchQuery);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
