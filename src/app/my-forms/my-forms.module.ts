import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFormsRoutingModule } from './my-forms-routing.module';
import { Form01Component } from './form01/form01.component';
import { Form02Component } from './form02/form02.component';
import { Form03Component } from './form03/form03.component';
import { Form04Component } from './form04/form04.component';

@NgModule({
  declarations: [
    Form01Component,
    Form02Component,
    Form03Component,
    Form04Component
  ],
  imports: [
    CommonModule,
    MyFormsRoutingModule
  ],
  exports: [
    Form01Component
  ]

})
export class MyFormsModule { }
