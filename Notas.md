# Forma de router en angular 17 --> https://angular.dev/guide/routing/router-tutorial
con la actualizacion de angular 17 no se crea mas el archivo <app.module.ts>
entonces para importar otros componentes y lograr hacer el routeo entre componentes es de la siguiente manera

# - - - - -- - -----------------------------------------------------------------------
# crear proyecto: ng new nombre-proy
solicita routing seleccionar N
y usar css o su preferencia

# crear componente :  ng generate component nombre-component

# en app.componente.html poner las etiquetas de los componentes creados 

<h1>Angular Router Sample</h1>
...
<app-crisis-list></app-crisis-list>
<app-heroes-list></app-heroes-list>

# ------------------------------------------------------------------------------------

# definir rutas 

* La ruta /crisis-centerabre el crisis-centercomponente.
* La ruta /heroes-listabre el heroes-listcomponente.

# abris app.routes.ts 

import {Routes} from '@angular/router';

export const routes = [];

en routes debes crear tus rutas --> Agregue dos rutas para sus dos primeros componentes:
                                    {path: 'crisis-list', component: CrisisListComponent},
                                    {path: 'heroes-list', component: HeroesListComponent},

# ---------------------------------------------------------------------------------------

# importar provideRouter 

en app.config.ts si no esta importar provider 

Desde su editor de código, abra el app.config.tsarchivo.

Agregue las siguientes declaraciones de importación:

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
Actualice los proveedores en appConfig:

providers: [provideRouter(routes)]

Para implementar esta funcionalidad, agrega la router-outletdirectiva a su archivo de plantilla.

Desde su editor de código, abra el app.component.htmlarchivo.

Elimine las siguientes líneas.

src/app/app.component.html


controlar
<app-crisis-list></app-crisis-list>
<app-heroes-list></app-heroes-list>
Añade la router-outletdirectiva.

src/app/app.component.html


controlar
<router-outlet></router-outlet>
Añadir RouterOutleta las importaciones del AppComponentinapp.component.ts

imports: [RouterOutlet],
Vea su aplicación actualizada en su navegador. Debería ver sólo el título de la aplicación. Para ver el crisis-listcomponente, agréguelo crisis-listal final de la ruta en la barra de direcciones de su navegador. Por ejemplo:

http://localhost:4200/crisis-list
controlar
Observe que crisis-listse muestra el componente. Angular está utilizando la ruta que definiste para cargar dinámicamente el componente. Puede cargar el heroes-listcomponente de la misma manera:

http://localhost:4200/heroes-list
controlar
