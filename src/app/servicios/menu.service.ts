import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {componenteMenu} from '../interfaces/interfaces'
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) { }

  getMenu(){
    return this.http.get<componenteMenu[]>('./assets/data/menu.json')
  }

}
