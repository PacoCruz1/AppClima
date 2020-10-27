import { Component, OnInit } from '@angular/core';
import { CurrentWeatherService } from '../../Services/current-weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './CurrentWeather.component.html',
  styleUrls: ['./CurrentWeather.component.scss']
})
export class CurrentWeatherComponent implements OnInit 
{

  constructor(public weatherService: CurrentWeatherService) {}

  ngOnInit(): void 
  {
    // this.weatherService.$weather.subscribe(console.log);
  }
}
