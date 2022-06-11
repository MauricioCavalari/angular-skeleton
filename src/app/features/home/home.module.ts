import {  CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DrawerComponent } from 'src/app/shared/components/drawer/drawer.component';
import { InfoInline } from 'src/app/shared/components/info-inline/info-inline.component';
import { FloatButtonComponent } from 'src/app/shared/components/float-button/float-button.component';

@NgModule({
  declarations: [
    HomeComponent,
    DrawerComponent,
    InfoInline,
    FloatButtonComponent
  ],
  imports: [HomeRoutingModule, SharedModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class HomeModule { }
