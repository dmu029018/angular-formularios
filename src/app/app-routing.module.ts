import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './commons/home/home.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { CommonsModule } from './commons/commons.module';

const routes: Routes = [
  {// Página principal
    path: 'home',
    component: HomeComponent
  },
  {// Página por defecto
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {// Formulario01
    path: 'forms',
    loadChildren: () => import('./my-forms/my-forms.module') // Carga en diferido
      .then(mod => mod.MyFormsModule)
  },
  {// No encontrado
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonsModule,
    RouterModule.forRoot(routes) // forRoot: Enrutamiento raíz

  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
