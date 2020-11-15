import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checks',
  templateUrl: './checks.page.html',
  styleUrls: ['./checks.page.scss'],
})
export class ChecksPage implements OnInit {
  dataCheck=[
    {nombre:"Futbol", estado:false,},
    {nombre:"Ciclismo", estado:false},
    {nombre:"Natacion", estado:false}
  ]
  dataRadio=[
    {nombre:"Soltero", estado:true,},
    {nombre:"Casado", estado:false},
    {nombre:"Divorciado", estado:false}
  ]
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log('CHECK');
    console.log(this.dataCheck);
  }

  onClickRadio(item){
    console.log(item);
    for(let i of this.dataRadio){
      if(i.nombre==item.nombre){
        i.estado=true;
      }else{
        i.estado=false;
      }
    }
    console.log(this.dataRadio);
  }
}
