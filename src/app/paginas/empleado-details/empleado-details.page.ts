import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import {Empleado} from 'src/app/interfaces/interfaces'


@Component({
  selector: 'app-empleado-details',
  templateUrl: './empleado-details.page.html',
  styleUrls: ['./empleado-details.page.scss'],
})
export class EmpleadoDetailsPage implements OnInit {

  titulo:string;
  objEmpleado:Empleado;

  constructor(private modal:ModalController,private navParams:NavParams) { 
    this.titulo=navParams.get('titulo')
    this.objEmpleado=navParams.get('item')
  }

  ngOnInit() {
  }

  cancelar(){
    this.modal.dismiss();
  }

  sub_grabar(){
    if(this.titulo=="Editar"){
      console.log("Proceso para editar");
      console.log(this.objEmpleado);
      
    }else{
      
      console.log("proceso para agregar");
      console.log(this.objEmpleado);
      this.modal.dismiss({
        cedula:this.objEmpleado.cedula,
        nombre:this.objEmpleado.nombre,
        apellido:this.objEmpleado.apellido,
        edad:this.objEmpleado.edad,
      });
    }
  }

}
