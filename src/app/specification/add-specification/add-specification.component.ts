import { Component } from '@angular/core';
import { IMAGE_URL } from 'src/app/constants';
import { SpecificationService } from '../specification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-specification',
  templateUrl: './add-specification.component.html',
  styleUrls: ['./add-specification.component.css']
})
export class AddSpecificationComponent {
  
  imageURLRegEx = IMAGE_URL;
  generationId: string = '';

  constructor(private specificationService: SpecificationService, private router: Router, private activatedRoute: ActivatedRoute){}

  addSpecification(form: NgForm){

    if(form.invalid){
      return;
    }
    this.activatedRoute.params.subscribe((data) => {
      this.generationId = data['generationId']
      
      const {name, imageUrl, weight, power, torque, engineType, transmission} = form.value;
      this.specificationService.createSpecification(name, imageUrl, weight, power, torque, engineType, transmission, this.generationId).subscribe(() => {
        this.router.navigate(['/generations', this.generationId]);
      });
    });
  }
}
