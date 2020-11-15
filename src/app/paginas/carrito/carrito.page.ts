import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams, AlertController } from '@ionic/angular';
import { Producto } from 'src/app/interfaces/interfaces';
import { CatalogoPage } from '../catalogo/catalogo.page';



@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})

export class CarritoPage implements OnInit {
 // @Input() public productos: Producto[];
  productos:Producto[]=[];
  carroVacio: Producto[]=[]
  total=0
  constructor(private modalc:ModalController,private navParams:NavParams,public alertController: AlertController) { 
    this.productos=navParams.get('productos');
  }

  ngOnInit() {
    let item = this.productos;
    let select={}

     for(let obj of item ){
      if(select[obj.id]){
        select[obj.id].count++;
      }else{
        select[obj.id]={...obj,count:1};
      }
    }
   this.productos = Object.keys(select).map(key=> select[key])
   console.log('items',this.productos);
   this.total = this.productos.reduce((a,b)=> a +(b.count * b.precio),0);
  }


  async cancelarCompra(){
    this.modalc.dismiss( 
      this.productos
    );
  }

  eliminarProducto(item:Producto){
      var resultado = []
      for (var i = 0; i < this.productos.length; i++) {
        if (this.productos[i] == item) {
          resultado.push(this.productos[i],this.productos[i].count);
        }
      }
      var dato = this.productos.indexOf(resultado[0]);
    
      this.productos.splice(dato, 1);
      resultado.shift;
  
  }

  async presentAlert() {
    
    const mod = await this.modalc.create({
      component:CatalogoPage,
      componentProps:{
        producto:this.carroVacio
      }
    })

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Finalizar Compra',
      /* subHeader: 'Subtitle', */
      message: 'Compra Finalizada',
      buttons: ['OK']
    });
    
    await alert.present();
    
    await mod.present();
  }


  actualizarTotal(){
    return this.productos.reduce((i,j)=> i+j.precio *j.count,0);
  }

}
