import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { PlusFivePipe } from './plus-five.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComponentBComponent,
    PlusFivePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
