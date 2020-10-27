import { Component, Input, OnInit } from '@angular/core';
import { DataWeather } from 'src/app/Models/DataWeather.models';

@Component({
  selector: 'app-weather-car',
  templateUrl: './WeatherCar.component.html',
  styleUrls: ['./WeatherCar.component.scss']
})
export class WeatherCarComponent implements OnInit {

  @Input () weather : DataWeather;

  constructor() { }

  ngOnInit(): void {
  }

}
