import { Injectable } from '@angular/core';
import { ConstantesGlobales } from '../constantes-globales';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private urlBase = '';
  constructor(private _httpClient: HttpClient) {
    this.urlBase=ConstantesGlobales.apiURL;
   }

  obtenerTodos(): Observable<any>{
   return this._httpClient.get(this.urlBase + 'api/usuarios');
  }

  obtenerUsuario(id:any): Observable<any>{
    return this._httpClient.get(`${this.urlBase}api/usuarios/${id}`);
   }

   registrar(elm:any){
    return this._httpClient.post(
      this.urlBase + 'api/usuarios',
      elm
  );
  }

  inicioSesion(elm:any){
    return this._httpClient.post(
      this.urlBase + 'api/usuario/login',
      elm
  );
  }
}
