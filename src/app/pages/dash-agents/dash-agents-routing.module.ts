import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashAgentsComponent } from './dash-agents.component';

const routes: Routes = [
  {
    path: '', 
    component: DashAgentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashAgentsRoutingModule { }
