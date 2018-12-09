import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DislayComponent } from './components/dislay/dislay.component';
import { HttpModule } from '@angular/http';
import { DataService } from './services/data.service';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    DislayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
