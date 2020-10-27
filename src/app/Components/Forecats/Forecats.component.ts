import { Component, OnInit } from '@angular/core';
import { ForescatService } from 'src/app/Services/forescat.service';

@Component({
  selector: 'app-forecats',
  templateUrl: './Forecats.component.html',
  styleUrls: ['./Forecats.component.scss']
})
export class ForecatsComponent implements OnInit {

  constructor(public forecastService: ForescatService) { }

  ngOnInit(): void {
  }

}
