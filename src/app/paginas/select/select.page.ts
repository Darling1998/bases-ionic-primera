import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {
  selectId:number=24;
  
  dataProvincia=[
    {idProvincia:1,nombre:"Azuay"},
    {idProvincia:6,nombre:"Chimborazo"},
    {idProvincia:9,nombre:"Guayas"},
    {idProvincia:17,nombre:"Pichincha"},
    {idProvincia:24,nombre:"Santa Elena"}
  ]
  constructor() { }

  ngOnInit() {
  }

  onChange(event){
    console.log(event);
    this.selectId=event.target.value;
    console.log("Id Provincia "+this.selectId);
  }

}
