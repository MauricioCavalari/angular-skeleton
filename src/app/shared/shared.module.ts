import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModule } from './form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const modules = [
  FormModule,
  BrowserAnimationsModule,
]

@NgModule({
  declarations: [],
  imports: [CommonModule, ...modules],
  exports: [...modules]
})
export class SharedModule { }
