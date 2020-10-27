import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './Components/CurrentWeather/CurrentWeather.component';
import { WeatherIconComponent } from './Components/WeatherIcon/WeatherIcon.component';
import { WeatherCarComponent } from './Components/WeatherCar/WeatherCar.component';
import { ForecatsComponent } from './Components/Forecats/Forecats.component';
import { LoadingComponent } from './Components/Loading/Loading.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    WeatherIconComponent,
    WeatherCarComponent,
    ForecatsComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
