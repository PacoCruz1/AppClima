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
export class ForescatService
{
  public weatherSubject : Subject<any> = new Subject<any>();
  public $weather : Observable<any>;

  endPpoint: string = "https://api.openweathermap.org/data/2.5/forecast";

  constructor(private http: HttpClient) 
  { 
    this.$weather = this.weatherSubject.asObservable().pipe(map(this.StructureData));

    this.getAll({
      lat: 41.547701,
      long: 1.883589
    });
  }

  StructureData (data: any)
  {
    let minMaxPerDay = {};

    data.list.forEach(weatherObject =>
    {
      let date = new Date(weatherObject.dt * 1000);
      let hours = date.getHours();
      let month = date.getMonth();
      let day = date.getDate();
      let key = `${month}-${day}`;

      let tempPerDay: DataWeather = minMaxPerDay[key] ||
      {
        minMaxTemp : {}
      };

      if(!tempPerDay.cod || hours == 16)
      {
        let source = weatherObject.weather[0];
        tempPerDay = { ...tempPerDay, ...source };
        tempPerDay.cod = source.id;
        tempPerDay.name = data.city.name;
      }

      if(!tempPerDay.minMaxTemp.min || (weatherObject.main.temp_min < tempPerDay.minMaxTemp.min))
      {
        tempPerDay.minMaxTemp.min = weatherObject.main.temp_min;
      }

      if(!tempPerDay.minMaxTemp.max || (weatherObject.main.temp_max < tempPerDay.minMaxTemp.max))
      {
        tempPerDay.minMaxTemp.max = weatherObject.main.temp_max;
      }

      minMaxPerDay[key] = tempPerDay;

    });

    return minMaxPerDay;
  }

  getAll(coords: Coords)
  {
    let args: string = `?lat=${coords.lat}&lon=${coords.long}&appid=${environment.key}&units=metric`;
    let url = this.endPpoint + args;

    if(isDevMode)
    {
       url = "assets/Forecast.json";
    }

    this.http.get(url).subscribe(this.weatherSubject);
    //let observable = this.http.get(this.endPpoint + args).subscribe(this.weatherSubject);    
  }
}
