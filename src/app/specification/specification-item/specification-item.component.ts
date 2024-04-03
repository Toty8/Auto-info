import { Component } from '@angular/core';
import { Specification } from 'src/app/types/specification';
import { SpecificationService } from '../specification.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specification-item',
  templateUrl: './specification-item.component.html',
  styleUrls: ['./specification-item.component.css']
})
export class SpecificationItemComponent {

  specification = {} as Specification;
  isLoading: boolean = true;

  constructor(private specificationService: SpecificationService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) =>{
      const id = data['specificationId'];

      this.specificationService.getSpecification(id).subscribe((specification) => {
        this.specification = specification;
        this.isLoading = false;
      });
    });
  }

}
