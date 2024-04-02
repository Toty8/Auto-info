import { Component } from '@angular/core';
import { IMAGE_URL } from 'src/app/constants';
import { EditAndAddGeneration } from 'src/app/types/generation';
import { GenerationService } from '../generation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-generation',
  templateUrl: './edit-generation.component.html',
  styleUrls: ['./edit-generation.component.css']
})
export class EditGenerationComponent {

  imageURLRegEx = IMAGE_URL;
  generation = {} as EditAndAddGeneration;
  id: string = '';

  constructor(private generationService: GenerationService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.id = data['generationId']
      
      this.generationService.getGenerationForEdit(this.id).subscribe((generation) => {
        this.generation = generation;
      });
    });
  }

  editGeneration(form: NgForm){

    if(form.invalid){
      return;
    }
    const {name, imageUrl, yearStarted, yearAborted} = form.value;
    this.generationService.editGeneration(this.id, name, imageUrl, yearStarted, yearAborted).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
