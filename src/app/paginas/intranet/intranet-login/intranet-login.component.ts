import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-intranet-login',
  templateUrl: './intranet-login.component.html',
  styleUrls: ['./intranet-login.component.scss'],
})
export class IntranetLoginComponent {
  form!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private _UsuariosService: UsuariosService,
    private _MatSnackBar: MatSnackBar
  ) {
    let admin = localStorage.getItem('admin');
    if (admin) {
      this.router.navigate(['/intranet/usuarios']);
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

  login() {
    let obj = {
      password: this.form.controls['password'].value,
      username: this.form.controls['usuario'].value,
    };

    if (obj.username == 'admin' && obj.password == 'admin') {
      let random = btoa(Date.now().toString());

      localStorage.setItem('admin', random);
      this.router.navigate(['/intranet/usuarios']);
    } else {
      this._MatSnackBar.open(
        'No se ha podido iniciar sesión. Intente nuevamente',
        '',
        {
          duration: 2000,
        }
      );
    }
  }
}
