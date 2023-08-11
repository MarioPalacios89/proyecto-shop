import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstantesGlobales } from '../constantes-globales';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private urlBase = '';
  constructor(private _httpClient: HttpClient) {
    this.urlBase=ConstantesGlobales.apiURL;
   }

  obtenerTodos(): Observable<any>{
   return this._httpClient.get(this.urlBase + 'api/productos');
  }

  obtenerProducto(id:any): Observable<any>{
    return this._httpClient.get(`${this.urlBase}api/productos/${id}`);
   }

  registrar(elm:any){
    return this._httpClient.post(
      this.urlBase + 'api/productos',
      elm
  );
  }

  actualizar(elm:any){
    return this._httpClient.put(
      this.urlBase + 'api/productos',
      elm
  );
  }

  eliminar(id:any){
    return this._httpClient.delete(`${this.urlBase}api/productos/${id}`);
  }
}
