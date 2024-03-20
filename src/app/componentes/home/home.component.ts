import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common'; // PARA USAR NgFot, NgIf, NgSwitch --> https://angular.dev/guide/directives
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,NgIf,MatTableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {
  private baseURI: string = "https://seccionales.unionferroviaria.org.ar/app/mutual/";
  datos:MatTableDataSource<any>;
  defineColumnas:string[]=['nombre','apellido','email','fecha_ingreso'];
  mostrarTabla:boolean=false;
  email:string='gomez.maira.anabella@gmail.com';
  constructor(private http:HttpClient){
    this.datos=new MatTableDataSource<any>([]);
  }
  ngOnInit(): void {
      this.solicitarDatos();
  }

  insertDatos(){

  }
  
  

  solicitarDatos(){

    this.http.get<any>(this.baseURI+'datos_personales.php?email=' + this.email).subscribe((data)=>{
      this.datos.data=data;
      console.log(this.datos.data);

    }, (error)=>{
      console.log('error al obtener datos:',error)
    })

  }

  ocultartabla(){
    this.mostrarTabla=false;
  }
  mostrartabla(){
    this.mostrarTabla= true;
  }
  modificar(){
    alert('hola');
  }
  mostrarMensaje() {
    console.log('Mouse encima');
    // Aquí podrías mostrar tu mensaje, por ejemplo, usando un Toastr o alert
  }

  // Función para ocultar el mensaje cuando se quita el mouse de una fila
  ocultarMensaje() {
    console.log('Mouse fuera');
    // Aquí podrías ocultar tu mensaje si lo mostraste anteriormente
  }
}
