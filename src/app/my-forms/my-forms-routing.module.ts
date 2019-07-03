import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Form01Component } from './form01/form01.component';
import { Form02Component } from './form02/form02.component';

const routes: Routes = [
  {
    path: 'form01',
    component: Form01Component
  },
  {
    path: 'form02',
    component: Form02Component
  }
  /*
  ,
  {
    path: 'form03',
    component: Form01Component
  },
  {
    path: 'form04',
    component: Form01Component
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFormsRoutingModule { }
