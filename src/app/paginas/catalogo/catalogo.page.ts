import { Component, OnInit } from '@angular/core';
import { CatalogoService } from 'src/app/servicios/catalogo.service';
import { Catalogo,Producto } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { CarritoPage } from '../carrito/carrito.page';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  listaCatalogo:Catalogo[]=[];

  sliderConfig={
    spaceBerween:10,
    centerdSlides:true,
    slidesPerView:1.1
  }

  listaCompras:Producto[]=[];
  totalProductos=0;

  carrito:Producto[]=[];

 
  constructor(private dataC:CatalogoService, private modalC: ModalController) { }

  ngOnInit() {
    this.llenarCatalogo();
  }

  llenarCatalogo(){
    this.dataC.getCatalogo().subscribe(
      respuesta =>{this.listaCatalogo= respuesta;
      console.log(this.listaCatalogo);
      }
    );
  }

  cargarCarrito(prod){
    this.listaCompras.push(prod);
    console.log(this.listaCompras);

    this.totalProductos=this.listaCompras.length;
  }

  async detalleCompra(){
    
    const modal = await this. modalC.create({
      component: CarritoPage,
      componentProps: { 
      productos: this.listaCompras 
      },
    });

    await modal.present();

   const {data}= await modal.onDidDismiss();
    this.listaCompras=data
    this.totalProductos=this.listaCompras.length;
   console.log("Detalle de Carrito",data);
  }


}
