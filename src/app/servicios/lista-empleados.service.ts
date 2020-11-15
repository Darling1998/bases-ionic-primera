import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../interfaces/interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListaEmpleadosService {

  constructor(private http:HttpClient) { }

  getEmpleados(){
   return this.http.get<Empleado[]>('assets/data/empleados.json');
  }

}
