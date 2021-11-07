import { Component } from '@angular/core';
import { Empleados} from"./models/empleados"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  EmpleadosArray: Empleados[] = 
  [{Id: 1, Nombre: "Ryan", Pais:"Rep. Dom" },
  {Id: 2, Nombre: "Lauris", Pais:"Rep. Dom" },
  {Id: 3, Nombre: "Juan", Pais:"Rep. Dom" }];

  selectedEmpleados: Empleados = new Empleados();

  addOrEdit(){
    if (this.selectedEmpleados.Id == 0){
    this.selectedEmpleados.Id = this.EmpleadosArray.length + 1;
    this.EmpleadosArray.push(this.selectedEmpleados);}

    this.selectedEmpleados = new Empleados;  
  }
  openForEdit(Empleados:Empleados){
    this.selectedEmpleados = Empleados;
  }

  delete(){
    if(confirm("¿Estas seguro de eliminarlo?"))
    this.EmpleadosArray = this.EmpleadosArray.filter(x => x != this.selectedEmpleados);
    this.selectedEmpleados = new Empleados;
  }
}


