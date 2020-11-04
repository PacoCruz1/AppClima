import { Component, OnInit } from '@angular/core';
import { GeolocationService } from './Services/geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ["./CSS/app.component.css"]
})
export class AppComponent implements OnInit
{
  title = 'ClimaAngular';

  constructor(public geolocationService : GeolocationService){}

  ngOnInit()
  {
    // this.geolocationService.RequestGeolocation();
  }
}
