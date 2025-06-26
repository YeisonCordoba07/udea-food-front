import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-account-menu-item',
  templateUrl: './account-menu-item.component.html',
  styleUrls: ['./account-menu-item.component.css']
})
export class AccountMenuItemComponent implements OnInit {

  @Input() label: string = "";
  @Input() foto: string = "";
  @Input() nombre: string = "";
  @Input() tipoCuenta: string = "";
  @Output() onClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.onClick.emit();
  }

}
