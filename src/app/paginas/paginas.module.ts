import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificacionEdadComponent } from './verificacion-edad/verificacion-edad.component';
import { PaginasRoutingModule } from './paginas-routing.module';
import { TiendaComponent } from './tienda/tienda.component';
import { FiltroComponent } from './tienda/filtro/filtro.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductosComponent } from './tienda/productos/productos.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { LayoutComponent } from './intranet/layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { IntranetUsuariosComponent } from './intranet/intranet-usuarios/intranet-usuarios.component';
import { IntranetProductosComponent } from './intranet/intranet-productos/intranet-productos.component';
import { IntranetPedidosComponent } from './intranet/intranet-pedidos/intranet-pedidos.component';
import { FormularioProductoComponent } from './intranet/componentes/formulario-producto/formulario-producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormularioUsuarioComponent } from './intranet/componentes/formulario-usuario/formulario-usuario.component';
import { DetalleProductoComponent } from './intranet/componentes/detalle-producto/detalle-producto.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ProductoPrevioCarritoComponent } from './tienda/producto-previo-carrito/producto-previo-carrito.component';
import { RegistrarPedidoComponent } from './tienda/registrar-pedido/registrar-pedido.component';
import { IntranetLoginComponent } from './intranet/intranet-login/intranet-login.component';



@NgModule({
  declarations: [VerificacionEdadComponent, TiendaComponent, FiltroComponent, FooterComponent, HeaderComponent, ProductosComponent, LoginComponent, RegistroComponent, LayoutComponent, IntranetUsuariosComponent, IntranetProductosComponent, IntranetPedidosComponent, FormularioProductoComponent, FormularioUsuarioComponent, DetalleProductoComponent, ProductoPrevioCarritoComponent, RegistrarPedidoComponent, IntranetLoginComponent],
  imports: [
    CommonModule,
    PaginasRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class PaginasModule { }
