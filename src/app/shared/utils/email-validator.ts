import { ValidatorFn } from "@angular/forms";

export function emailValidator(domains: string[]): ValidatorFn {
    const domainsString = domains.join('|');
    const regEx = new RegExp(`[A-Za-z0-9]+@gmail\.(${domainsString})`);

    return (control) => {
      const isEmailInvalid = control.value === '' || regEx.test(control.value);
      return isEmailInvalid ? null : {emailValidator: true}
    }
  }