import { Component, OnInit } from '@angular/core';
import { SpecificationService } from '../specification.service';
import { GenerationService } from 'src/app/generation/generation.service';
import { ActivatedRoute } from '@angular/router';
import { Generation } from 'src/app/types/generation';

@Component({
  selector: 'app-specifications-list',
  templateUrl: './specifications-list.component.html',
  styleUrls: ['./specifications-list.component.css']
})
export class SpecificationsListComponent implements OnInit {

  generation = {} as Generation;
  isLoading: boolean = true;

  constructor(private specificationService: SpecificationService, private generationService: GenerationService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) =>{
      const id = data['generationId'];

      this.generationService.getGeneration(id).subscribe((generation) => {
        this.generation = generation;
        this.isLoading = false;
      });
    });
  }
  
  delete(id: string): void{
    this.specificationService.deleteSpecification(id).subscribe(() => {
      this.ngOnInit();
    });
  }
}
