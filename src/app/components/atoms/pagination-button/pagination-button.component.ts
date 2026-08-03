import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-button',
  templateUrl: './pagination-button.component.html',
  styleUrls: ['./pagination-button.component.css']
})
export class PaginationButtonComponent implements OnInit {

    @Input() typePaginationButton: "right" | "left" | "page" = "page";

    @Input() numberPage: number = -1;
    @Input() isActive: boolean = false;

    @Output() onClick = new EventEmitter<void>();


    constructor() { }

    ngOnInit(): void {
    }

    handleClick(): void{
        this.onClick.emit();
    }

    




}
