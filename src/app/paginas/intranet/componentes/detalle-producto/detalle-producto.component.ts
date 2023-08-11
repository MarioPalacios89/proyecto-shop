import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent {
  form!: FormGroup;

  vistaPrevia =  'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

  constructor(
    public matDialogRef: MatDialogRef<DetalleProductoComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any=null,
    private formBuilder: FormBuilder,
  ) {

  }

  ngOnInit(): void {
    this.buildForm();
  }

  ngAfterViewInit() {
    if(this.data){
      this.form.patchValue({
        descripcion: this.data.descripcion,
        precio: this.data.precio,
        stock: this.data.stock,
      })
      this.vistaPrevia=this.data.imagen
    }
  }

  buildForm() {
    this.form = this.formBuilder.group({
      descripcion: [{value:'',disabled:true}],
      precio: [{value:'',disabled:true}],
      stock: [{value:'',disabled:true}],
    });
  }
}
