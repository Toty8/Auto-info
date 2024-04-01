import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from './types/brand';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getBrands(){
    return this.http.get<Brand[]>('/api/brands');
  }
}
