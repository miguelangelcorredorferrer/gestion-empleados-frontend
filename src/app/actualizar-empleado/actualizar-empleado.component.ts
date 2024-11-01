import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs';
import { of } from 'rxjs';
import { tap } from 'rxjs';
import Swal from 'sweetalert2'; 
@Component({
  selector: 'app-actualizar-empleado',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './actualizar-empleado.component.html',
  styleUrl: './actualizar-empleado.component.css'
})
export class ActualizarEmpleadoComponent {

  id: number;
  empleado:Empleado;
  constructor(private route: ActivatedRoute, private empleadoServicio:EmpleadoService, private router: Router){}
  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    this.empleadoServicio.obtenerEmpleadoPorId(this.id).pipe(
      tap(dato => { //Realiza algún efecto secundario
        this.empleado=dato;
      }),
      catchError(error => {
        console.error(error);
        return of(null);
      })
    ).subscribe();
  }

  irAlaListaEmpleados(){
    this.router.navigate(['/empleados']);
    Swal.fire('Empleado actualizado', `El empleado ${this.empleado.nombre} ha sido actualizado con exito`, `success`);
  }
  onSubmit(): void{
    if(this.empleado){
      this.empleadoServicio.actualizarEmpleado(this.id, this.empleado).pipe(
        tap(dato=>{ //Redirige en caso de éxito
          this.irAlaListaEmpleados();
        }),
        catchError(error => {
          console.error('Error al actualizar el empleado:', error);
          return of(null);
        })
      ).subscribe();
    }
  }
}
