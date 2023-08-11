import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  sideBarOpen = false;

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _UsuariosService: UsuariosService,
    private _MatSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      numero_documento: [null],
      nombres_apellidos: [null],
      fecha_nacimiento: [null],
      email: [null],
      celular: [null],
      direccion: [null],
      password: [null],
    });
  }

  grabar(){


    let obj={
      "direccion": this.form.controls["direccion"].value,
      "dni": this.form.controls["numero_documento"].value,
      "email": this.form.controls["email"].value,
      "fechaNacimiento":  this.form.controls["fecha_nacimiento"].value.toISOString(),
      "fechaRegistro": (new Date()).toISOString(),
      "nombre": this.form.controls["nombres_apellidos"].value,
      "password":  this.form.controls["password"].value,
      "telefono": this.form.controls["celular"].value,
      "tipoUsuario": "1",
      "userName": this.form.controls["numero_documento"].value,
    }


    this._UsuariosService.registrar(obj).subscribe(response=>{
      this._MatSnackBar.open("Se ha registrado con exito el usuario",'', {
        duration: 2000,
      });
      this.form.reset();
    })
  }
}
