import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private categ=[];
  constructor(private http:HttpClient) { }

  getClientes(){
    return this.http.get('/assets/data/clientes.json');
  }

  getCategorias(){
    return this.categ;
  }
 

}
