import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-previo-carrito',
  templateUrl: './producto-previo-carrito.component.html',
  styleUrls: ['./producto-previo-carrito.component.scss']
})
export class ProductoPrevioCarritoComponent {

  constructor(private router: Router){

  }

  obtenerProductos(){
    let carrito = localStorage.getItem('carrito');

    if (carrito) {
      let productos = JSON.parse(carrito);

      return productos;
    }

    return [];
  }

  removerProducto(index:any){
    let carrito :any = localStorage.getItem('carrito');
    let productos = JSON.parse(carrito);
    productos.splice(index, 1);

    localStorage.setItem('carrito',JSON.stringify(productos));
  }

  pagar(){
    let cliente = localStorage.getItem('cliente');
    if (cliente) {
      let session = JSON.parse(cliente);
      if(session){
        return  this.router.navigate(['/registro-pedido'])
      }
    }
    return   this.router.navigate(['/login'])

  }

  obtenerTotal(){
    let productos:any=this.obtenerProductos();
    let num=0;
    if(productos.length>0){
      productos=productos.map((element:any) => +element["valor"]);
      num = productos.reduce((a:number, b:number) => a+ b , 0);

    }

    return num.toFixed(2);
  }
}
