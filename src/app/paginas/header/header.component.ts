import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() cerrarMarket = new EventEmitter<any>();

  constructor(private router: Router){}

  cerrarVerCarrito() {
    this.cerrarMarket.emit(true);
  }

  contadorProductos() {
    let carrito = localStorage.getItem('carrito');

    if (carrito) {
      let productos = JSON.parse(carrito);

      return productos.length;
    }

    return 0;
  }

  estaLogeado(){
    let cliente = localStorage.getItem('cliente');
    if (cliente) {
      let session = JSON.parse(cliente);
      if(session){
       return true;
      }
    }
    return false;
  }

  cerrarSesion(){
    localStorage.removeItem("cliente");
    this.router.navigate(['/tienda']);
  }
}
