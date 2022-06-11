import { LOCALE_ID, NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

//registerLocaleData(LOCALE_PT)

export const LocaleProvide = {
  provide: LOCALE_ID,
  useValue: 'pt-Br'
}

export const BaseUrlProvider = {
  provide: APP_BASE_HREF,
  useValue: 'pt-BR'
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [LocaleProvide, BaseUrlProvider],
  exports: [HttpClientModule]
})
export class ConfigModule { }
