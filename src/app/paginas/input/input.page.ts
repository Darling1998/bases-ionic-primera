import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  nombre:string;

persona={cedula:'',nombres:'',apellidos:'',email:'',fono:''}

  constructor() { }

  ngOnInit() {
   
  }


  mostrarInformacion(){
    console.log(this.nombre);
  }

  sub_formulario(){
    console.log(this.persona);
  
    
  }

}
