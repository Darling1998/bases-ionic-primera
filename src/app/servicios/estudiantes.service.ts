import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  constructor(private http:HttpClient) { }


  getEstudiantes(){
    return this.http.get<any[]>('/assets/data/estudiantes.json');
  }
}
