import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IMAGE_URL } from 'src/app/constants';
import { EditAndAddBrand } from 'src/app/types/brand';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css']
})
export class EditBrandComponent implements OnInit {

  imageURLRegEx = IMAGE_URL;
  brand = {} as EditAndAddBrand;
  id: string = '';

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.id = data['brandId']
      
      this.apiService.getBrandForEdit(this.id).subscribe((brand) => {
        this.brand = brand;
      });
    });
  }

  editBrand(form: NgForm){

    if(form.invalid){
      return;
    }
    const {name, imageUrl} = form.value;
    this.apiService.editBrand(this.id, name, imageUrl).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
