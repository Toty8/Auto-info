import { Component } from '@angular/core';
import { IMAGE_URL } from 'src/app/constants';
import { GenerationService } from '../generation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-generation',
  templateUrl: './add-generation.component.html',
  styleUrls: ['./add-generation.component.css']
})
export class AddGenerationComponent {

  imageURLRegEx = IMAGE_URL;
  modelId: string = '';

  constructor(private generationService: GenerationService, private router: Router, private activatedRoute: ActivatedRoute){}

  addGeneration(form: NgForm){

    if(form.invalid){
      return;
    }
    this.activatedRoute.params.subscribe((data) => {
      this.modelId = data['modelId']
      
      const {name, imageUrl, yearStarted, yearAborted} = form.value;
      this.generationService.createGeneration(name, imageUrl, yearStarted, yearAborted, this.modelId).subscribe(() => {
        this.router.navigate(['/models', this.modelId]);
      });
    });
  }

}
