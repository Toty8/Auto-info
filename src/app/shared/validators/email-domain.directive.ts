import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { emailValidator } from '../utils/email-validator';

@Directive({
  selector: '[appEmailDomain]',
  providers:[
    {
      provide: NG_VALIDATORS,
      useExisting: EmailDomainDirective,
      multi: true
    }
  ]
})
export class EmailDomainDirective implements Validator, OnChanges{

  @Input() appEmailDomain: string[] = [];

  constructor() { }

  validator: ValidatorFn = () => null;

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const {currentValue} = changes['appEmailDomain'];

    if (currentValue?.length) {
      this.validator = emailValidator(currentValue);
    }
  }
}
