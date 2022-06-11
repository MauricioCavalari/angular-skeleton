import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const modules = [FormsModule, ReactiveFormsModule]

@NgModule({
  declarations: [],
  imports: [CommonModule, ...modules],
  exports: [...modules]
})
export class FormModule { }
