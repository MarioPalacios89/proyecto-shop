import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  sideBarOpen = true;

  constructor(private router: Router) {
  }

  logout(){
    localStorage.removeItem("admin");
    this.router.navigate(['/intranet/login'])
  }

  verificarLogin(){
    let admin=localStorage.getItem("admin");
    return admin;
  }
}
