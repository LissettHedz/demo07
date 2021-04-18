import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { ArbolQaModule } from './pages/arbol-qa/arbol-qa.module';
import { DashAgentsModule } from './pages/dash-agents/dash-agents.module';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    FormsModule,
    HttpClientModule,
    ArbolQaModule,
    DashAgentsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
