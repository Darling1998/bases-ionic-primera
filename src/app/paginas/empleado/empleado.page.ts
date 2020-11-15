import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpleadosService } from '../../servicios/empleados.service';
import { Empleado } from '../../interfaces/interfaces'
import { ModalController } from '@ionic/angular';
import { EmpleadoDetailsPage } from '../empleado-details/empleado-details.page';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.page.html',
  styleUrls: ['./empleado.page.scss'],
})

export class EmpleadoPage implements OnInit {
  empleados:Observable<Empleado[]>;
  objVacio={}
  nuevoEmp :Empleado[]=[];

  constructor(private emplser:EmpleadosService, private modalCtrl:ModalController) { }

  ngOnInit() {
   this.emplser.$getListSource.subscribe(list=>{
     this.nuevoEmp=list;
   }).unsubscribe();
  }

  async editar(item:Empleado){
    const modal= await this.modalCtrl.create({
      component:EmpleadoDetailsPage,
      componentProps:{
        objEmpleado:item,
        titulo:"Editar"
      }
    });
    
    await modal.present();
  }

  async agregar(){
    const modal= await this.modalCtrl.create({
    
      component:EmpleadoDetailsPage,
        componentProps:{
        objEmpleado:this.objVacio,
        titulo:"Agregar",
      } 
    });
     
    await modal.present();

    const{data}= await modal.onDidDismiss();

    if(data!=null){
      let nuevo:Empleado;
      nuevo=data;
      this.addEmpleado(nuevo);
    }
  }

  addEmpleado(item:Empleado){
    this.nuevoEmp.push(item);
  }

  eliminar(item:Empleado){

    console.log("ok eliinar");
    console.log(item);

    var resultado = []
    for (var i = 0; i < this.nuevoEmp.length; i++) {
      if (this.nuevoEmp[i] == item) {
        resultado.push(this.nuevoEmp[i]);
      }
    }

    var dato = this.nuevoEmp.indexOf(resultado[0]);
    
      this.nuevoEmp.splice(dato, 1);
      resultado.shift;
  }
}