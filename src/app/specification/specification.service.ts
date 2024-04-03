import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EditAndAddSpecification } from '../types/specification';

@Injectable({
  providedIn: 'root'
})
export class SpecificationService {

  constructor(private http: HttpClient){}

  createSpecification(name: string, imageUrl: string, weight: number, power: number, torque: number, engineType: string, transmission: string, generationId: string){
    return this.http.post<EditAndAddSpecification>(`/api/specifications/${generationId}/add-specification`, {name, imageUrl, weight, power, torque, engineType, transmission});
  }

  deleteSpecification(id: string){
    return this.http.delete(`/api/specifications/${id}`);
  }
}