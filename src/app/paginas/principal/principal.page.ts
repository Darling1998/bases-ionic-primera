import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';
import { EmpleadosService } from 'src/app/servicios/empleados.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  listaEmpleados:Empleado[]=[];


  constructor(private router:Router,private prueba:EmpleadosService) { 
  this.listaEmpleados=[

    {cedula:"123456789",nombre:"Darling",apellido:"Delacruz",edad:20},
    {cedula:"0928168328",nombre:"Josue",apellido:"Rocafuerte",edad:22},
  ];
  this.goReceiver();
 }

  ngOnInit() {
  }

  goReceiver(){
    this.prueba.sendListSource(this.listaEmpleados);
    this.router.navigate(['empleado']);
  }
}
