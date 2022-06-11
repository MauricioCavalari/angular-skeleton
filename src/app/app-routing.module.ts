import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutModule } from './features/about/about.module';
import { HomeModule } from './features/home/home.module';

const features = [AboutModule, HomeModule]

const routes: Routes = [];

@NgModule({
  imports: [...features ,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
