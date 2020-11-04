import { Component, OnInit } from '@angular/core';
import { GeolocationService } from 'src/app/Services/geolocation.service';

@Component({
  selector: 'app-geolocation-button',
  templateUrl: './GeolocationButton.component.html',
  styleUrls: ['./GeolocationButton.component.scss']
})
export class GeolocationButtonComponent implements OnInit 
{
  active : boolean = false;
  constructor(public geolocationService : GeolocationService) { }

  ngOnInit(): void 
  {
    this.geolocationService.$permission.then((PermissionStatus: any) => 
          {
            if(PermissionStatus.state)this.active = true;

            if(this.active) this.geolocationService.RequestGeolocation();
          });
          this.geolocationService.$permission.then(console.log)
  }
}
