import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from 'src/app/servicios/estudiantes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  textoBuscar='';
  listaEstudiantes:any[]=[];
  constructor(private est:EstudiantesService) { }

  ngOnInit() {
    this.cargarData();
  }

  cargarData(){
    this.est.getEstudiantes().subscribe(
      estudiante=>{console.log(estudiante)
      this.listaEstudiantes=estudiante
      }
    )
  }

  Buscar(event){
    this.textoBuscar=event.detail.value;
    //console.log(event);
    console.log(this.textoBuscar);
  }
}
