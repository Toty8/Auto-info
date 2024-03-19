import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Brand } from 'src/app/types/brand';

@Component({
  selector: 'app-models-list',
  templateUrl: './models-list.component.html',
  styleUrls: ['./models-list.component.css']
})
export class ModelsListComponent implements OnInit {

  brand = {} as Brand;
  isLoading: boolean = true;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((data) =>{
      const id = data['brandId'];

      this.api.getBrand(id).subscribe((brand) => {
        this.brand = brand;
        this.isLoading = false;
      });
    });
  }
}
