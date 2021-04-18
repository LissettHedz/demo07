import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArbolQaRoutingModule } from './arbol-qa-routing.module';
import { ArbolQaComponent } from './arbol-qa.component';


@NgModule({
  declarations: [
    ArbolQaComponent
  ],
  exports: [
    ArbolQaComponent
  ],
  imports: [
    CommonModule,
    ArbolQaRoutingModule
  ]
})
export class ArbolQaModule { }
