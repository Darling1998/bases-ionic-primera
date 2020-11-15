import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
})
export class ListasPage implements OnInit {
  
   clientes:Observable<any>; 
  constructor(private dataservice:DataService) { }

  ngOnInit() {
    this.clientes= this.dataservice.getClientes(); 
  }

  listar(){
    this.clientes= this.dataservice.getClientes();
    console.log(this.clientes);
  } 
}
