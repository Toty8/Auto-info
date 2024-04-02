import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/app/model/model.service';
import { Model } from 'src/app/types/model';
import { GenerationService } from '../generation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generations-list',
  templateUrl: './generations-list.component.html',
  styleUrls: ['./generations-list.component.css']
})
export class GenerationsListComponent implements OnInit {

  model = {} as Model;
  isLoading: boolean = true;

  constructor(private modelService: ModelService, private generationService: GenerationService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((data) =>{
      const id = data['modelId'];

      this.modelService.getModel(id).subscribe((model) => {
        this.model = model;
        this.isLoading = false;
      });
    });
  }
}
