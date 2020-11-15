import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {
  fechaActual:Date=new Date();
  constructor() { }

  ngOnInit() {
  }

  sub_mostrarFecha(){
    console.log(this.fechaActual);
  
  }

  cambioFecha(event){
    console.log("Date",new Date(event.detail.value));

  }
}
