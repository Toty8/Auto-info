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

  getModelForEdit(id: string){
    return this.http.get<EditAndAddModel>(`/api/models/${id}/edit`);
  }

  editModel(id: string, name: string, imageUrl: string){
    return this.http.put<EditAndAddModel>(`/api/models/${id}/edit`, {name, imageUrl});
  }
  
  deleteModel(id: string){
    return this.http.delete(`/api/models/${id}`);
  }

}