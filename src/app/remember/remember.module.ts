import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { RememberComponent } from './remember.component';
import { RememberItemComponent } from './remember-item/remember-item.component';
import { RememberAddComponent } from './remember-add/remember-add.component';

@NgModule({
  declarations: [
    RememberComponent,
    RememberItemComponent,
    RememberAddComponent
  ],
  exports: [
    RememberComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class RememberModule { }
