import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-principal-button',
  templateUrl: './principal-button.component.html',
  styleUrls: ['./principal-button.component.css']
})
export class PrincipalButtonComponent implements OnInit {

  @Input() buttonType: "submit" | "button" = "button";
  @Input() disabled: boolean = false;
  @Input() text: string = 'Agregar';
  @Input() styleButton: 'primary' | 'secondary' = 'primary';
  @Input() showIcon: boolean = true;
  @Output() onClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }


  handleClick(): void {
    if (!this.disabled) {
      this.onClick.emit();
    }
  }

  get buttonClasses(): string {
    const base = 'font-bold py-2 px-4 rounded-md flex gap-3 items-center transition-all duration-150 ease-in-out w-full justify-center text-base whitespace-nowrap';

    if (this.styleButton === 'primary') {
      return `${base} ${this.disabled
        ? 'bg-gray-400 cursor-not-allowed text-gray-100'
        : 'hover:bg-orange-500 hover:scale-105 bg-orange-400 border border-orange-400 text-white'}`;
    } else {
      return `${base} border-2 ${this.disabled
        ? 'border-gray-400 text-gray-400 cursor-not-allowed'
        : 'bg-white text-orange-500 hover:bg-orange-500 hover:text-white hover:scale-105 border-orange-500'}`;
    }
  }

}
