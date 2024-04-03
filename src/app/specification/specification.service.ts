import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EditAndAddSpecification, Specification } from '../types/specification';

@Injectable({
  providedIn: 'root'
})
export class SpecificationService {

  constructor(private http: HttpClient){}

  getSpecification(id: string){
    return this.http.get<Specification>(`/api/specifications/${id}`);
  }

  createSpecification(name: string, imageUrl: string, weight: number, power: number, torque: number, engineType: string, transmission: string, generationId: string){
    return this.http.post<EditAndAddSpecification>(`/api/specifications/${generationId}/add-specification`, {name, imageUrl, weight, power, torque, engineType, transmission});
  }

  getSpecificationForEdit(id: string){
    return this.http.get<EditAndAddSpecification>(`/api/specifications/${id}/edit`);
  }

  editSpecification(id: string, name: string, imageUrl: string, weight: number, power: number, torque: number, engineType: string, transmission: string){
    return this.http.put<EditAndAddSpecification>(`/api/specifications/${id}/edit`, {name, imageUrl, weight, power, torque, engineType, transmission});
  }

  deleteSpecification(id: string){
    return this.http.delete(`/api/specifications/${id}`);
  }
}