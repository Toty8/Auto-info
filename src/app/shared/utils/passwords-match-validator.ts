import { ValidatorFn } from "@angular/forms";


export function matchPasswordsValidator(passwordControlName: string, rePasswordControlName: string): ValidatorFn{
    return (control) => {

        const passControl = control.get(passwordControlName);
        const rePassControl  = control.get(rePasswordControlName);

        const areMatching = passControl ?.value === rePassControl ?.value;

        console.log(areMatching);
        
        return areMatching ? null : {matchPasswordsValidator: true};
    };
}