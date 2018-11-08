import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { GraphComponent } from './graph/graph.component';
import {HttpClientModule} from '@angular/common/http';
import {GetCitiesListService} from './services/get-cities-list.service';
import {FormsModule} from '@angular/forms';
import {WeatherService} from './services/weather.service';
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartModule
  ],
  providers: [GetCitiesListService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
