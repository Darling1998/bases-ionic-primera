import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.page.html',
  styleUrls: ['./navegacion.page.scss'],
})
export class NavegacionPage implements OnInit {
  valorNombre="Darling"
  valorApellido="De La Cruz"
  constructor() { }

  ngOnInit() {
  }

}
