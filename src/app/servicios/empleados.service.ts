import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  //contiene los valores que van a compartirse.
  private listSource= new BehaviorSubject<any[]>([]);

  //creamos el observable
  $getListSource = this.listSource.asObservable();

  constructor() { }

  sendListSource(list:any[]){
    this.listSource.next(list);
  }
}
