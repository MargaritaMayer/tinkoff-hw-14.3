import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RememberModule } from './remember/remember.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    RememberModule,
    BrowserModule,
    // BrowserAnimationsModule,
    // AppRoutingModule,
    // FormsModule,
    // CommonModule,
    // ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
