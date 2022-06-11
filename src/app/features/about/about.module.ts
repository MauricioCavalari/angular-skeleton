import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AboutComponent],
  imports: [AboutRoutingModule, SharedModule, HttpClientModule]
})
export class AboutModule { }
