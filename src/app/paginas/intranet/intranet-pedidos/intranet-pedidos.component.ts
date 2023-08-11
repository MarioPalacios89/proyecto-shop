import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PedidosService } from 'src/app/servicios/pedidos.service';
import { FormularioProductoComponent } from '../componentes/formulario-producto/formulario-producto.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intranet-pedidos',
  templateUrl: './intranet-pedidos.component.html',
  styleUrls: ['./intranet-pedidos.component.scss']
})
export class IntranetPedidosComponent {
  displayedColumns: string[] = [
    'index',
    'pedido',
    'cantidad',
    'importe',
    'venta',
    'accion',
  ];

  dataSource: any = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | null =
    null;

  constructor(private _PedidosService:PedidosService,private materialDialog: MatDialog,private router: Router) {
    let admin=localStorage.getItem("admin")
    if(!admin){
      this.router.navigate(['/intranet/login']);
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    setTimeout(() => {
      this.buscar();
    }, 200);
  }

  cargarGrilla(data = []) {
    this.dataSource = new MatTableDataSource(data);
  }

  modificar(elm: any) {}

  eliminar(elm: any) {}

  nuevo(){
    let dialogRef = this.materialDialog.open(FormularioProductoComponent, {
      disableClose: true,
      width: '1200px',
      data: {
      }
    });
  }

  buscar(){
    this._PedidosService.obtenerTodos().subscribe(response=>{
      this.cargarGrilla(response);

    })
  }
}
