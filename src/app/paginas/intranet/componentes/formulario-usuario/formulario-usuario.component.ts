import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.scss']
})
export class FormularioUsuarioComponent {
  form!: FormGroup;

  constructor(
    public matDialogRef: MatDialogRef<FormularioUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any=null,
    private formBuilder: FormBuilder,
  ){}

  ngOnInit(): void {
    this.buildForm();
  }

  ngAfterViewInit() {
    if(this.data){
      this.form.patchValue({
        id:this.data.idUsuario,
        nombres_apellidos: this.data.nombre,
        dni: this.data.dni,
        email: this.data.email,
        telefono: this.data.telefono,
        direccion: this.data.direccion,
        username: this.data.userName,
      })
    }
  }

  buildForm() {
    this.form = this.formBuilder.group({
      id:[{value:'',disabled:true}],
      nombres_apellidos:[{value:'',disabled:true}],
      dni: [{value:'',disabled:true}],
      email: [{value:'',disabled:true}],
      telefono: [{value:'',disabled:true}],
      direccion:[{value:'',disabled:true}],
      username: [{value:'',disabled:true}]
    });
  }
}
