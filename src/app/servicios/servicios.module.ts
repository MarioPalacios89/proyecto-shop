import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosService } from './usuarios.service';
import { ProductosService } from './productos.service';
import { PedidosService } from './pedidos.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[UsuariosService,ProductosService,PedidosService]
})
export class ServiciosModule { }
