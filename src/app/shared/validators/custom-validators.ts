import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

// Validador para minSeleccion
export function minSeleccionValidator(maxOptions: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value < 0 || value > maxOptions) {
      return { minSeleccionInvalid: true };
    }
    return null;
  };
}

// Validador para maxSeleccion
export function maxSeleccionValidator(minControl: AbstractControl, maxOptions: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const minValue = minControl.value;
    if (value < minValue || value > maxOptions) {
      return { maxSeleccionInvalid: true };
    }
    return null;
  };
}
