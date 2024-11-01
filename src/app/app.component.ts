import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaEmpleadosComponent, RegistrarEmpleadoComponent, HttpClientModule, RouterModule, FormsModule, ActualizarEmpleadoComponent, EmpleadoDetallesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sistema gestión de empleados';
}
