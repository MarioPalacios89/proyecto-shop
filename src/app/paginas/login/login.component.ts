import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  sideBarOpen = false;

  form!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder,private _UsuariosService:UsuariosService,    private _MatSnackBar: MatSnackBar) {
    let cliente=localStorage.getItem("cliente")
    if(cliente){
      this.router.navigate(['/tienda']);
    }
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      usuario: [null],
      password: [null],
    });
  }

  // login(){
  //   this.router.navigate(['/intranet'])
  // }

  login(){
    let obj={
      "password":  this.form.controls["password"].value,
      "username": this.form.controls["usuario"].value,
    }

   this._UsuariosService.inicioSesion(obj).subscribe(response=>{
    if(response){
      localStorage.setItem("cliente",JSON.stringify(response));
      this.router.navigate(['/tienda'])
    }else{
      this._MatSnackBar.open("No se ha podido iniciar sesión. Intente nuevamente",'', {
        duration: 2000,
      });
    }
   })
  }


}
