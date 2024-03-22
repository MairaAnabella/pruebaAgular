import { Component, Inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialogRef, MatDialogContent } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-insert-datos',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatDialogContent,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
   
  ],
  templateUrl: './insert-datos.component.html',
  styleUrl: './insert-datos.component.css',
})
export class InsertDatosComponent {
  private baseURI: string =
    'https://seccionales.unionferroviaria.org.ar/app/mutual/';
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  fecha=new Date();
  fechaString = this.fecha.toString();
  constructor(
    public http: HttpClient,
    public dialogRef: MatDialogRef<InsertDatosComponent>
  ) /*  @Inject(MAT_DIALOG_DATA) public data */ {}

  subirDatos() {
    const formData= new FormData();
    formData.append('nombre',this.nombre);
    formData.append('apellido',this.apellido);
    formData.append('email',this.email);
    formData.append('fecha',this.fechaString);

    this.http
  }
}
