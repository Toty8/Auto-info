import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from 'src/app/brand/brand.service';
import { Brand } from 'src/app/types/brand';
import { ModelService } from '../model.service';

@Component({
  selector: 'app-models-list',
  templateUrl: './models-list.component.html',
  styleUrls: ['./models-list.component.css']
})
export class ModelsListComponent implements OnInit {

  brand = {} as Brand;
  isLoading: boolean = true;

  constructor(private brandService: BrandService, private modelService: ModelService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((data) =>{
      const id = data['brandId'];

      this.brandService.getBrand(id).subscribe((brand) => {
        this.brand = brand;
        this.isLoading = false;
      });
    });
  }

  delete(id: string): void{
    this.modelService.deleteModel(id).subscribe(() => {
      this.ngOnInit();
    });
  }
}
