import { Component } from '@angular/core';
import { IMAGE_URL } from 'src/app/constants';
import { EditAndAddSpecification } from 'src/app/types/specification';
import { SpecificationService } from '../specification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-specification',
  templateUrl: './edit-specification.component.html',
  styleUrls: ['./edit-specification.component.css']
})
export class EditSpecificationComponent {
  
  imageURLRegEx = IMAGE_URL;
  specification = {} as EditAndAddSpecification;
  id: string = '';

  constructor(private specificationService: SpecificationService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.id = data['specificationId']
      
      this.specificationService.getSpecificationForEdit(this.id).subscribe((specification) => {
        this.specification = specification;
      });
    });
  }

  editSpecification(form: NgForm){

    if(form.invalid){
      return;
    }
    
    const {name, imageUrl, weight, power, torque, engineType, transmission} = form.value;
    this.specificationService.editSpecification(this.id, name, imageUrl, weight, power, torque, engineType, transmission).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
