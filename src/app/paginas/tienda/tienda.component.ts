import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent {

  sideBarOpen = false;
  constructor(private cdr: ChangeDetectorRef){}



}
