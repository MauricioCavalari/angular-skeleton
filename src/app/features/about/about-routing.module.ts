import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from 'src/app/shared/components/error/error.component';
import { InitialGuard } from 'src/app/shared/guards/initial.guard';
import { AboutComponent } from './about.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [InitialGuard]
  },

  {
    path: 'error/:param',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
