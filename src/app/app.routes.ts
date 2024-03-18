import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { HomeComponent } from './componentes/home/home.component';

export const routes: Routes = [
    {
        path:'',
       component:HomeComponent
    } ,

     {
        path:'login',
       component:LoginComponent
    } ,
    {
        path:'register',
       component:RegisterComponent
    } ,
   /*  {
        path:'menu',
       component:LoginComponent
    } , */


];
