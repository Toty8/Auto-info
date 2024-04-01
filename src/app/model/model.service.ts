import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EditAndAddModel } from '../types/model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
    
  constructor(private http: HttpClient) { }

  createModel(name: string, imageUrl: string, brandId: string){
    return this.http.post<EditAndAddModel>(`/api/models/${brandId}/add-model`, {name, imageUrl});
  }
  
  deleteModel(id: string){
    return this.http.delete(`/api/models/${id}`);
  }

}