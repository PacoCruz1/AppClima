import { Component, OnInit } from '@angular/core';
import { ForescatService } from './Services/forescat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ["./CSS/app.component.css"]
})
export class AppComponent implements OnInit
{
  title = 'ClimaAngular';

  constructor(private forescatService : ForescatService){}

  ngOnInit()
  {
    this.forescatService.$weather.subscribe(console.log);
  }
}
