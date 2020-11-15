import { Component, OnInit } from '@angular/core';
import {Persona} from '../../interfaces/interfaces'
@Component({
  selector: 'app-array',
  templateUrl: './array.page.html',
  styleUrls: ['./array.page.scss'],
})
export class ArrayPage implements OnInit {

  listapersonas:Persona[]=[];
  constructor() { 
    this.listapersonas=[
      {cedula:"2459632287",nombre:"Darling"},
      {cedula:"0928168327",nombre:"Josue"}
    ]

  }

  ngOnInit() {
  }

  agregar(){
    let objPersona:Persona;
    objPersona={cedula:"32654",nombre:"Mario Torres"}
    this.addpersona(objPersona);
  }

  addpersona(item:Persona){
    this.listapersonas.push(item);
  }

}
