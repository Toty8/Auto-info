import { Component} from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent {
  
  constructor(private apiService: ApiService){}

  addBrand(ev: Event, brandName: string, brandImageUrl: string){
    ev.preventDefault();
    
    this.apiService.createBrand(brandName, brandImageUrl).subscribe();
  }
}
