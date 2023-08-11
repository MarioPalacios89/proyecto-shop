import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PedidosService } from 'src/app/servicios/pedidos.service';

@Component({
  selector: 'app-registrar-pedido',
  templateUrl: './registrar-pedido.component.html',
  styleUrls: ['./registrar-pedido.component.scss'],
})
export class RegistrarPedidoComponent {
  sideBarOpen = false;
  constructor(
    private router: Router,
    private _PedidosService: PedidosService,
    private _MatSnackBar: MatSnackBar
  ) {
    let productos: any = this.obtenerProductos();
    if (productos.length == 0) {
      this.router.navigate(['/tienda']);
    }
  }

  login() {
    this.router.navigate(['/intranet']);
  }

  obtenerProductos() {
    let carrito = localStorage.getItem('carrito');

    if (carrito) {
      let productos = JSON.parse(carrito);

      return productos;
    }

    return [];
  }

  removerProducto(index: any) {
    let carrito: any = localStorage.getItem('carrito');
    let productos = JSON.parse(carrito);
    productos.splice(index, 1);

    localStorage.setItem('carrito', JSON.stringify(productos));

    if (productos.length == 0) {
      this.router.navigate(['/tienda']);
    }
  }

  obtenerTotal() {
    let productos: any = this.obtenerProductos();
    let num = 0;
    if (productos.length > 0) {
      productos = productos.map((element: any) => +element['valor']);
      num = productos.reduce((a: number, b: number) => a + b, 0);
    }

    return num.toFixed(2);
  }

  registrarPedido() {
    let cliente: any = localStorage.getItem('cliente');
    let datosCliente = JSON.parse(cliente);

    let obj :any= {
      cliente: {
        apeMaterno: datosCliente.nombre,
        apePaterno: datosCliente.nombre,
        dni: datosCliente.dni,
        email: datosCliente.email,
        fechaNacimiento: datosCliente.fechaNacimiento,
        id: datosCliente.idUsuario,
        nombres: datosCliente.nombre,
      },
      fechaPedido: new Date().toISOString(),
      pedidoDetalle: [],
    };

    let productos = this.obtenerProductos();
    let nProductos = productos.length;

    for (let x = 0; x < nProductos; x++) {
      obj.pedidoDetalle.push({
        cantidad: 1,
        importe: 1*productos[x].valor,
        preciovta: productos[x].valor*1,
        producto: productos[x].meta,
      });
    }


    this._PedidosService.registrar(obj).subscribe((response) => {
      console.log('producto', response);
      this._MatSnackBar.open('Se ha registrado con exito su pedido', '', {
        duration: 2000,
      });
      this.router.navigate(['/tienda']);
      localStorage.removeItem('carrito');
    });
  }
}
