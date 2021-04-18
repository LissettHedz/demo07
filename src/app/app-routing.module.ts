import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArbolQaComponent } from './pages/arbol-qa/arbol-qa.component';
import { DashAgentsComponent } from './pages/dash-agents/dash-agents.component';



const routes: Routes = [
    {
        path: 'arbol-qa', 
        component: ArbolQaComponent
    },
    {
        path: 'dash-agents', 
        component: DashAgentsComponent
    },
    {
        path: '**',
        redirectTo: 'dash-agents',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }