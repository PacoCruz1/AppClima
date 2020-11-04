import { Component, OnInit } from '@angular/core';
import { CurrentWeatherService } from 'src/app/Services/current-weather.service';
import { loadingAnimation } from '../../Animations/Loading.animations';

@Component({
  selector: 'app-loading',
  templateUrl: './Loading.component.html',
  styleUrls: ['./Loading.component.scss'],
  animations:[loadingAnimation()]
})
export class LoadingComponent implements OnInit {

  _elements : string[] = ['#ffe5ec', '#ff80a0','#ff2e63', '#800020', '#1a0006'];
  elements : string[];

  constructor(private currentWeatherService: CurrentWeatherService) {}

  ngOnInit(): void 
  {
    this.set();
  }

  set()
  {
    this.elements = this._elements;
    this.ScheduleNextIteration();
    
  }

  ScheduleNextIteration()
  {
    setTimeout(() => 
    {
      if(this.elements.length == 0)return this.set();

      this.Clear();

    }, 100 * this._elements.length + 350);
  }

  Clear()
  {
    this.elements = [];
    this.ScheduleNextIteration();
  }

}
