import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Catalogo, Producto } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(private http:HttpClient) { }

  getCatalogo(){
    return this.http.get<Catalogo[]>('/assets/data/catalogo.json')
  }

}
