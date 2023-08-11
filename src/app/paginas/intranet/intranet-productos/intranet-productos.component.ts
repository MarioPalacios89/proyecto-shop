import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductosService } from 'src/app/servicios/productos.service';
import { FormularioProductoComponent } from '../componentes/formulario-producto/formulario-producto.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intranet-productos',
  templateUrl: './intranet-productos.component.html',
  styleUrls: ['./intranet-productos.component.scss']
})
export class IntranetProductosComponent {
  displayedColumns: string[] = [
    'index',
    'descripcion',
    'precio',
    'stock',
    'accion',
  ];

  dataSource: any = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true })  paginator!: MatPaginator;

  constructor(private _ProductosService:ProductosService,private materialDialog: MatDialog,    private _MatSnackBar: MatSnackBar,private router: Router) {
    let admin=localStorage.getItem("admin")
    if(!admin){
      this.router.navigate(['/intranet/login']);
    }
  }

  ngAfterViewInit() {
    this.cargarGrilla();

    setTimeout(() => {
      this.buscar();
    }, 200);
  }



  cargarGrilla(data = []) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }

  nuevo(){
    let dialogRef = this.materialDialog.open(FormularioProductoComponent, {
      disableClose: true,
      width: '800px',
    });
    dialogRef.afterClosed().subscribe((responseDialog: any) => {
      if (responseDialog) {
          this.buscar();
      }
  });
  }


  modificar(elm: any) {

    this._ProductosService.obtenerProducto(elm.id).subscribe(response=>{
      let dialogRef = this.materialDialog.open(FormularioProductoComponent, {
        disableClose: true,
        width: '800px',
        data:response
      });
      dialogRef.afterClosed().subscribe((responseDialog: any) => {
        if (responseDialog) {
            this.buscar();
        }
    });

    })


  }

  eliminar(elm: any) {
    this._ProductosService.eliminar(elm.id).subscribe(response=>{
      this._MatSnackBar.open("Se ha eliminado con exito el producto",'', {
        duration: 2000,
      });
      this.buscar();
    });
  }

  buscar(){
    this._ProductosService.obtenerTodos().subscribe(response=>{
      this.cargarGrilla(response);

    })
  }
}
