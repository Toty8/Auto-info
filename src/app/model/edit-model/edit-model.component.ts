import { Component } from '@angular/core';
import { ModelService } from '../model.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IMAGE_URL } from 'src/app/constants';
import { EditAndAddModel } from 'src/app/types/model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-model',
  templateUrl: './edit-model.component.html',
  styleUrls: ['./edit-model.component.css']
})
export class EditModelComponent {

  imageURLRegEx = IMAGE_URL;
  model = {} as EditAndAddModel;
  id: string = '';

  constructor(private modelService: ModelService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.id = data['modelId']
      
      this.modelService.getModelForEdit(this.id).subscribe((model) => {
        this.model = model;
      });
    });
  }

  editModel(form: NgForm){

    if(form.invalid){
      return;
    }
    const {name, imageUrl} = form.value;
    this.modelService.editModel(this.id, name, imageUrl).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}

