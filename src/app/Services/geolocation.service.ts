import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Coords } from '../Models/coords.models';

@Injectable({
  providedIn: 'root'
})

export class GeolocationService 
{
  public coordsSubject : Subject<Coords> = new Subject<Coords>();
  public $coords : Observable<Coords> = this.coordsSubject.asObservable();
  public coordsPromise : Promise<Coords>;
  public $permission : Promise<string>;

  constructor() 
  { 
    this.$permission = (navigator as any).permissions.query({name: 'geolocation'});
  }

  getGeolocation(): Promise<Coords>
  {
    return new Promise((res, rej)=>
    {
      if(!navigator || !('geolocation' in navigator)) return rej('Geolocation is not available');
      
      (navigator as any).geolocation.getCurrentPosition((position)=>
      {
        res({
          lat: position.coords.latitude,
          long: position.coords.longitude
        })
      });
    });
  }

  RequestGeolocation(): any
  {
    if(!this.coordsPromise) this.coordsPromise = this.getGeolocation();

    this.coordsPromise.then(coords=>
    {
      this.coordsSubject.next(coords);
    });
  }
}
