import { Empleado } from '../empleado';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-lista-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.css'
})
export class ListaEmpleadosComponent implements OnInit {
  empleados:Empleado[];
  constructor(private empleadoServicio:EmpleadoService, private router:Router) { }
  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  actualizarEmpleado(id:number){
    this.router.navigate(['actualizar-empleado',id]);
  }

  eliminarEmpleado(id:number){
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Confirma si deseas eliminar al empleado",
      icon: 'warning', // Cambiado 'type' a 'icon'
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimínalo',
      cancelButtonText: 'No, cancelar',
      buttonsStyling: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
          console.log(dato);
          this.obtenerEmpleados();
          Swal.fire(
            'Empleado eliminado',
            'El empleado ha sido eliminado con exito',
            'success'
          )
        })
      }
    });
  }

  private obtenerEmpleados(){
    this.empleadoServicio.obtenerListaDeEmpleados().subscribe(dato =>{
      this.empleados = dato;
    });
  }

  verDetallesDelEmpleado(id:number){
    this.router.navigate(['empleado-detalles',id]);
  }



}
