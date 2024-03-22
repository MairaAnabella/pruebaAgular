import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InsertDatosComponent } from '../abm/insert-datos/insert-datos.component';
import { DialogCustomData } from '../models/dialog-custom-data.model';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matDialog:MatDialog) { }

  openDialogCustom(data:DialogCustomData){
    this.matDialog.open(InsertDatosComponent)
  }
}
