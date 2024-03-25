import { Component, booleanAttribute} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { IMAGE_URL } from 'src/app/constants';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent {

  imageURLRegEx = IMAGE_URL;
  constructor(private apiService: ApiService){}

  addBrand(form: NgForm){

    if(form.invalid){
      return;
    }
    //this.apiService.createBrand(brandName, brandImageUrl).subscribe();
  }
}
