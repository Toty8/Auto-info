import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Brand } from 'src/app/types/brand';
import { BrandService } from '../brand.service';

@Component({
  selector: 'app-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.css']
})
export class BrandsListComponent implements OnInit{

  brands: Brand[] = [];
  isLoading: boolean = true;

  constructor(private api: ApiService, private brandService: BrandService, private router: Router){}

  ngOnInit(): void {
    this.api.getBrands().subscribe((brands) => {
      this.brands = brands;
      this.isLoading = false;
    });
  }

  delete(id: string): void{
    this.brandService.deleteBrand(id).subscribe(() => {
      this.ngOnInit();
    });
  }
}
