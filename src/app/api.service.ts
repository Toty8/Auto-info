import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Brand } from './types/brand';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getBrands(){
    const { apiUrl } = environment;

    return this.http.get<Brand[]>(`${apiUrl}/brands`);
  }

  getBrand(id: string){
    const { apiUrl } = environment;

    return this.http.get<Brand>(`${apiUrl}/brands/${id}`);
  }

  createBrand(name: string, imageUrl: string){
    const { apiUrl } = environment;
    const payload = {name, imageUrl}
    return this.http.post<Brand>(`${apiUrl}/brands`, payload);
  }
}
