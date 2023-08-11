import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerificacionEdadComponent } from './verificacion-edad/verificacion-edad.component';
import { TiendaComponent } from './tienda/tienda.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { LayoutComponent } from './intranet/layout/layout.component';
import { IntranetUsuariosComponent } from './intranet/intranet-usuarios/intranet-usuarios.component';
import { IntranetProductosComponent } from './intranet/intranet-productos/intranet-productos.component';
import { IntranetPedidosComponent } from './intranet/intranet-pedidos/intranet-pedidos.component';
import { RegistrarPedidoComponent } from './tienda/registrar-pedido/registrar-pedido.component';
import { IntranetLoginComponent } from './intranet/intranet-login/intranet-login.component';


const routes: Routes = [
  {
    path: 'verificacion',
    component: VerificacionEdadComponent
  }  ,
  {
    path: 'tienda',
    component: TiendaComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'registro-pedido',
    component: RegistrarPedidoComponent
  },
  {
    path:'intranet',
    component:LayoutComponent,
    children:[
      {
        path:'', redirectTo:'login' ,pathMatch:'full',
      },
      {
        path: 'login',
        component: IntranetLoginComponent,
      },
      {
        path: 'usuarios',
        component: IntranetUsuariosComponent,
      },
      {
        path: 'productos',
        component: IntranetProductosComponent,
      },
      {
        path: 'pedidos',
        component: IntranetPedidosComponent,
      }
    ]
  },
  {path: '**', redirectTo: '/tienda'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
