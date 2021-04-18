import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashAgentsRoutingModule } from './dash-agents-routing.module';
import { DashAgentsComponent } from './dash-agents.component';


@NgModule({
  declarations: [
    DashAgentsComponent
  ],
  exports: [
    DashAgentsComponent
  ],
  imports: [
    CommonModule,
    DashAgentsRoutingModule
  ]
})
export class DashAgentsModule { }
