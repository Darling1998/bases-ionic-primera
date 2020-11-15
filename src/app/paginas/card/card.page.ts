import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  sliderConfig={
    spaceBerween:10,
    centerdSlides:true,
    slidesPerView:1.1
  }

  slides:{
    Imagen:string;
    Titulo:string;
    descripcion:string;
  }[]=[
    {
      Imagen:"/assets/img/python.PNG",
      Titulo:"Docente 1",
      descripcion:"Marjorie Cornoel"
    },
    {
      Imagen:"/assets/img/redes prot.PNG",
      Titulo:"Docente 2",
      descripcion:"Jaime Orozco"
    },
  ];


  constructor() { }

  ngOnInit() {
  }
  sub_listar(){
    
  }

  saludar(){
    console.log('Hola');
  }
}
