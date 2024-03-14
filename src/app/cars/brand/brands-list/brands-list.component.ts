import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.css']
})
export class BrandsListComponent implements OnInit{

  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.api.getBrands().subscribe((brands) => {
      console.log(brands);
    });
  }

}
