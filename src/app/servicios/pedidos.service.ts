import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstantesGlobales } from '../constantes-globales';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private urlBase = '';
  constructor(private _httpClient: HttpClient) {
    this.urlBase=ConstantesGlobales.apiURL;
   }

  obtenerTodos(): Observable<any>{
   return this._httpClient.get(this.urlBase + 'api/pedidos');
  }

  registrar(elm:any){
    return this._httpClient.post(
      this.urlBase + 'api/pedidos',
      elm
  );
  }
}
