import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm} from '@angular/forms';
import { EMAIL_DOMAIN } from 'src/app/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailDomains = EMAIL_DOMAIN;
  constructor(private userServise: UserService, private router: Router){}

  login(form: NgForm){

    if (form.invalid) {
      return;
    }

    console.log(form.value);
    

    this.userServise.login();
    this.router.navigate(['/']);
  }
}
