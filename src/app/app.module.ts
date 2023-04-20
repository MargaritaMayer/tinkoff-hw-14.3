import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RememberModule } from './remember/remember.module';

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
