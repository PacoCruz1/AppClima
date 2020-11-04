import { Component, OnInit } from '@angular/core';
import { ForescatService } from 'src/app/Services/forescat.service';
import { showUpStagger } from '../../Animations/ShowUp.animations'

@Component({
  selector: 'app-forecats',
  templateUrl: './Forecats.component.html',
  styleUrls: ['./Forecats.component.scss'],
  animations: [showUpStagger]
})
export class ForecatsComponent implements OnInit {

  constructor(public forecastService: ForescatService) { }

  ngOnInit(): void {
  }

}
