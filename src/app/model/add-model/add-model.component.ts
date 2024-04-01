import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IMAGE_URL } from 'src/app/constants';
import { ModelService } from '../model.service';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.css']
})
export class AddModelComponent {

  imageURLRegEx = IMAGE_URL;
  brandId: string = '';

  constructor(private modelService: ModelService, private router: Router, private activatedRoute: ActivatedRoute){}

  addModel(form: NgForm){

    if(form.invalid){
      return;
    }
    this.activatedRoute.params.subscribe((data) => {
      this.brandId = data['brandId']
      
      const {name, imageUrl} = form.value;
      this.modelService.createModel(name, imageUrl, this.brandId).subscribe(() => {
        this.router.navigate(['/brands', this.brandId]);
      });
    });
  }
}
