import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { FormularioUsuarioComponent } from '../componentes/formulario-usuario/formulario-usuario.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intranet-usuarios',
  templateUrl: './intranet-usuarios.component.html',
  styleUrls: ['./intranet-usuarios.component.scss'],
})
export class IntranetUsuariosComponent {
  displayedColumns: string[] = [
    'index',
    'numero_documento',
    'nombre_apellido',
    'direccion',
    'telefono',
    'email',
    'tipo_usuario',
    'accion',
  ];

  dataSource: any = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | null =
    null;

  constructor(private _UsuariosService:UsuariosService,private materialDialog: MatDialog,private router: Router) {
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

  detalle(elm: any) {
    console.log(elm);
    this._UsuariosService.obtenerUsuario(elm.idUsuario).subscribe(response=>{
      let dialogRef = this.materialDialog.open(FormularioUsuarioComponent, {
        disableClose: true,
        width: '800px',
        data:response
      });
    })
  }


  buscar(){
    this._UsuariosService.obtenerTodos().subscribe(response=>{
      this.cargarGrilla(response);

    })
  }
}
