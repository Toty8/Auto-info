import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand, EditAndAddBrand } from '../types/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
    
    constructor(private http: HttpClient) { }

    getBrand(id: string){
        return this.http.get<Brand>(`/api/brands/${id}`);
    }

    getBrandForEdit(id: string){
        return this.http.get<EditAndAddBrand>(`/api/brands/${id}/edit`);
    }

    editBrand(id: string, name: string, imageUrl: string){
        return this.http.put<EditAndAddBrand>(`/api/brands/${id}/edit`, {name, imageUrl});
    }

    createBrand(name: string, imageUrl: string){
        return this.http.post<EditAndAddBrand>('/api/brands', {name, imageUrl});
    }

    deleteBrand(id: string){
        return this.http.delete<Brand>(`/api/brands/${id}`);
    }
}