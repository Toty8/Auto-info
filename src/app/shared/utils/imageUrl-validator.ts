import { ValidatorFn } from "@angular/forms";

export function imageValidator(imageUrl: string): ValidatorFn{

    const regEx = new RegExp(`^${imageUrl}?:\/\/`);    

    return (control) => {
      const isImageUrlInValid = control.value === '' || regEx.test(control.value);
      return isImageUrlInValid ? null: {imageValidator: true};
    };
 
  }