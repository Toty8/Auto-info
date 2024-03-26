import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { IMAGE_URL } from 'src/app/constants';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css']
})
export class EditBrandComponent {

  imageURLRegEx = IMAGE_URL;
  constructor(private apiService: ApiService){}

  editBrand(form: NgForm){

    if(form.invalid){
      return;
    }
    console.log(form.value); 
    //edit
  }

}
