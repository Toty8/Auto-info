import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IMAGE_URL } from 'src/app/constants';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent {

  imageURLRegEx = IMAGE_URL;
  constructor(private apiService: ApiService, private router: Router){}

  addBrand(form: NgForm){

    if(form.invalid){
      return;
    }
    const {name, imageUrl} = form.value;
    this.apiService.createBrand(name, imageUrl).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
