import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {
  parametro=null;
  parametro2=null;

  constructor(private data:ActivatedRoute) { }

  ngOnInit() {
   this.parametro=this.data.snapshot.paramMap.get('id');
   this.parametro2=this.data.snapshot.paramMap.get('nombreap');
   
  console.log(this.parametro+" "+this.parametro2);
  }

}
