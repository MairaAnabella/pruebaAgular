import { Component, EventEmitter, OnInit, Output,AfterViewInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common'; // PARA USAR NgFot, NgIf, NgSwitch --> https://angular.dev/guide/directives
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { TableConfig } from '../../models/table-config.model';
import { TableAction } from '../../models/table-action.model';
import { TABLE_ACTION } from '../../enum/table-action.enum';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { InsertDatosComponent } from '../../abm/insert-datos/insert-datos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,NgIf,MatTableModule,MatFormFieldModule, MatInputModule, MatPaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit  {
  private baseURI: string = "https://seccionales.unionferroviaria.org.ar/app/mutual/";
  datos:MatTableDataSource<any>;
  defineColumnas:string[]=['nombre','apellido','email','fecha_ingreso'];
  mostrarTabla:boolean=false;
  email:string='gomez.maira.anabella@gmail.com';
  tableConfig: TableConfig | undefined;
  tablaCofig:TableConfig={
    isPaginable:true
  }
  @Output() action:EventEmitter<TableAction>=new  EventEmitter();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(private http:HttpClient,public dialog: MatDialog){
      this.datos = new MatTableDataSource<any>(); 
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(InsertDatosComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });}
  

  ngAfterViewInit() {
    this.datos.paginator = this.paginator;
    
  }

  ngOnInit(): void {
      this.solicitarDatos();
  }

  solicitarDatos() {
    
    this.http.get<any>(this.baseURI + 'pruebaAngular.php?email=' + this.email)
      .subscribe((resp) => {
        console.log(resp);
       
        if (resp ) {
          
          this.datos.data=  [resp];
          console.log(this.datos.data);
        } else {
          // Manejar el caso de respuesta vacía (opcional)
          console.log('No se encontraron datos para el email proporcionado.');
        }
      }, (error) => {
        console.log('Error al obtener datos:', error);
        // Manejar el error (opcionalmente muestra un mensaje)
      });
  }
  
  setConfig(config: TableConfig) {
    this.tableConfig = config;

   
    if (this.tableConfig.showActions) {
      this.defineColumnas.push('acciones');
    }
  }
OnEdit(row:any){
  this.action.emit({action:TABLE_ACTION.EDIT,row});
  console.log(row, 'editar')

}
onDelete(row:any){
  this.action.emit({action:TABLE_ACTION.DELETE,row});
  console.log(row, 'eliminar')

}

  ocultartabla(){
    this.mostrarTabla=false;
  }
  mostrartabla(){
    this.mostrarTabla= true;
  }
 
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datos.filter = filterValue.trim().toLowerCase();
    console.log(this.datos.filter)
    console.log(event)
  }

}
