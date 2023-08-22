import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { MenuComponent } from './shared/components/menu/menu.component';
import { SharedModule } from './shared/shared.module';
import localeEsHN from '@angular/common/locales/es-HN';

import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsHN);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonModule, SharedModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-HN',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
