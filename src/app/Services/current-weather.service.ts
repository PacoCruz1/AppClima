import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, from } from 'rxjs'
import { map } from 'rxjs/operators'
import { environment } from '../../environments/environment'
import { Coords } from '../Models/coords.models';
import { DataWeather } from '../Models/DataWeather.models';

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService 
{

  public weatherSubject : Subject<any> = new Subject<any>();
  public $weather : Observable<any>;

  endPpoint: string = "https://api.openweathermap.org/data/2.5/weather";

  constructor(private http: HttpClient) 
  {
    this.$weather = this.weatherSubject.asObservable().pipe(
      map((data : any)=>
      {
        let mainWeather = data.weather[0];
        let weather : DataWeather = {
          name: data.name,
          cod: data.cod,
          temp:data.main.temp,
          ...mainWeather
        }
        return weather;
      })
    );

    this.getAll({
      lat: 41.547701,
      long: 1.883589
    });
  }

  getAll(coords: Coords)
  {
    let args: string = `?lat=${coords.lat}&lon=${coords.long}&appid=${environment.key}&units=metric`;
    let url = this.endPpoint + args;

    if(isDevMode)
    {
      url = "assets/weather.json";
    }

    this.http.get(url).subscribe(this.weatherSubject);
    //let observable = this.http.get(this.endPpoint + args).subscribe(this.weatherSubject);    
  }
}

