import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { FlexLayoutModule } from '@angular/flex-layout';


import {
  MdcTypographyModule,
  MdcButtonModule,
  MdcFabModule,
  MdcIconModule,
  MdcMenuModule,
  MdcTopAppBarModule,
  MdcSnackbarModule,
  MdcListModule,
  MdcDrawerModule
} from '@angular-mdc/web';
import { AboutComponent } from './about/about.component';
import { FactPageComponent } from './fact-page/fact-page.component';
import { FactCardComponent } from './fact-card/fact-card.component';

const MDC_MODULES: any[] = [
  MdcTypographyModule,
  MdcButtonModule,
  MdcFabModule,
  MdcIconModule,
  MdcMenuModule,
  MdcTopAppBarModule,
  MdcSnackbarModule,
  MdcListModule,
  MdcDrawerModule
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FactPageComponent,
    FactCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MDC_MODULES,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
