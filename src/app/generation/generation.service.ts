import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EditAndAddGeneration } from '../types/generation';

@Injectable({
  providedIn: 'root'
})
export class GenerationService {
    
  constructor(private http: HttpClient) { }

  createGeneration(name: string, imageUrl: string, yearStarted: number, yearAborted: number, modelId: string){
    return this.http.post<EditAndAddGeneration>(`/api/generations/${modelId}/add-generation`, {name, imageUrl, yearStarted, yearAborted});
  }

  deleteGeneration(id: string){
    return this.http.delete(`/api/generations/${id}`);
  }
}