import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/servicios/menu.service';
import { Observable } from 'rxjs';
import { componenteMenu } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  componentesMenu:Observable<componenteMenu[]>;

  constructor(private menuservice:MenuService) { }

  ngOnInit() {
    this.recuperar();
  }


  recuperar(){
    this.componentesMenu=this.menuservice.getMenu();
  }
}
