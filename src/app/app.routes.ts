import { Routes } from '@angular/router';

import { HomeComponent } from './componentes/home/home.component';
import { InsertDatosComponent } from './abm/insert-datos/insert-datos.component';

export const routes: Routes = [
    {
        path:'',
       component:HomeComponent
    } ,

   
     {
        path:'datos',
       component:InsertDatosComponent
    } , 


];
