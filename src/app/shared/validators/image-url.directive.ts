import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { imageValidator } from '../utils/imageUrl-validator';

@Directive({
  selector: '[appImageUrl]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ImageUrlDirective,
      multi: true 
    }
  ]
})
export class ImageUrlDirective implements Validator, OnChanges{

  @Input() appImageUrl: string = '';

  constructor() { }

  validator: ValidatorFn = () => null;

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges): void {    
    const {currentValue} = changes['appImageUrl'];

    if (currentValue?.length) {
      this.validator = imageValidator(currentValue);
    }
  }

}
