import { Component, OnInit } from '@angular/core';
import { CurrentWeatherService } from './Services/current-weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ["./CSS/app.component.css"]
})
export class AppComponent implements OnInit
{
  title = 'ClimaAngular';

  constructor(private weatherService: CurrentWeatherService){}

  ngOnInit()
  {
    this.weatherService.$weather.subscribe(console.log)
  }
}
