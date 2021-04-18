import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArbolQaComponent } from './arbol-qa.component';

const routes: Routes = [
  {
    path: '', 
    component: ArbolQaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArbolQaRoutingModule { }
