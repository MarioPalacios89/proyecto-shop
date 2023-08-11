import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.scss'],
})
export class FormularioProductoComponent {
  form!: FormGroup;

  archivoSeleccionados: any = null;

  vistaPrevia =
    'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';


  constructor(
    public matDialogRef: MatDialogRef<FormularioProductoComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any=null,
    private formBuilder: FormBuilder,
    private _ProductosService: ProductosService,
    private _MatSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  ngAfterViewInit() {
    if(this.data){
      let getRandomNumber=(min:number, max:number)=> {
        return Math.floor(Math.random() * max) + min;
      }
      this.form.patchValue({
        descripcion: this.data.descripcion,
        precio: this.data.precio,
        stock: this.data.stock,
      })
      this.vistaPrevia=`assets/imagenes/licores/${getRandomNumber(1,3)}.jpg`
      //this.vistaPrevia=this.data.imagen;
    }
  }

  buildForm() {
    this.form = this.formBuilder.group({
      descripcion: [null],
      precio: [null],
      stock: [null],
      imagen: [null],
    });
  }

  seleccionarArchivo(event: any): void {
    this.archivoSeleccionados = event.target.files;

    if (this.archivoSeleccionados) {
      const file: File | null = this.archivoSeleccionados.item(0);

      if (file) {
        this.vistaPrevia =
          'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
        let archivo = file;

        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.vistaPrevia = e.target.result;
        };

        reader.readAsDataURL(archivo);
      }
    }
  }

  grabar() {
    let obj=null;
    if (this.data) {
      obj = {
        id:this.data.id,
        descripcion: this.form.controls["descripcion"].value,
        precio: this.form.controls["precio"].value,
        stock: this.form.controls["stock"].value
      };
      this._ProductosService.actualizar(obj).subscribe(response=>{
        console.log("producto",response);
        this._MatSnackBar.open("Se ha actualizado con exito el producto",'', {
          duration: 2000,
        });
        this.matDialogRef.close(true);
      })
    } else {
      obj = {
        descripcion: this.form.controls["descripcion"].value,
        precio: this.form.controls["precio"].value,
        stock: this.form.controls["stock"].value,
        imagen:this.vistaPrevia
      };
      this._ProductosService.registrar(obj).subscribe(response=>{
        console.log("producto",response);
        this._MatSnackBar.open("Se ha registrado con exito el producto",'', {
          duration: 2000,
        });
        this.matDialogRef.close(true);
      })
    }
  }
}
