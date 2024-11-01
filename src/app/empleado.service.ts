import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from './empleado';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  //Esta URL obtiene el listado de todos los empleados en el backend
  private baseURL = "http://localhost:8080/api/v1/empleados"; //endpoint

  constructor(private httpClient : HttpClient) { }
  // Este metodo nos sirve para obtener los empleados, un observable es un patron de diseño
  obtenerListaDeEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  }
  
  //Este metodo nos sirve para registrar un empleado
  registrarEmpleado(empleado:Empleado): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,empleado);
  }

  //este metodo sirve para obtener o buscar un empleado
  obtenerEmpleadoPorId(id: number): Observable<Empleado> {
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`);
  }

  actualizarEmpleado(id:number, empleado:Empleado): Observable <Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,empleado);
  }

  eliminarEmpleado(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
