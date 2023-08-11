import { Component } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';
import { DetalleProductoComponent } from '../../intranet/componentes/detalle-producto/detalle-producto.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  constructor(private _ProductosService:ProductosService,private materialDialog: MatDialog,  private _MatSnackBar: MatSnackBar){
    this.generarLicores();
  }

  listaLicores:any=[];

  generarLicores(){

    this._ProductosService.obtenerTodos().subscribe(response=>{

      let data=response;

      let n=data.length;

      let getRandomNumber=(min:number, max:number)=> {
        return Math.floor(Math.random() * max) + min;
      }

      for(let x=0;x<n;x++){
        this.listaLicores.push({
          name:data[x].descripcion,
          valor:(data[x].precio).toFixed(2),
          imagen:getRandomNumber(1,3)+".jpg",
          id:data[x].id,
          meta:data[x]
        })
      }

    })




    console.log(this.listaLicores);
  }

  detalle(elm: any) {

    this._ProductosService.obtenerProducto(elm.id).subscribe(response=>{
      response["imagen"]=`assets/imagenes/licores/${elm["imagen"]}`;
      let dialogRef = this.materialDialog.open(DetalleProductoComponent, {
        disableClose: true,
        width: '800px',
        data:response
      });
    })


  }

  agregarProducto(elm:any){
    let carrito = localStorage.getItem('carrito');
    if (carrito) {
      let productos = JSON.parse(carrito);
      productos.push(elm);
      localStorage.setItem("carrito",JSON.stringify(productos));
    }else{
      let arr=[elm];
      localStorage.setItem("carrito",JSON.stringify(arr));
    }
    this._MatSnackBar.open("Se ha agregado el producto al carrito",'', {
      duration: 2000,
    });
  }
}
