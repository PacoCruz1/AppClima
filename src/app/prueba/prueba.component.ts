import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  template: `
    <p>
      prueba works!{{ name }}
    </p>
  `,
  styles: [
  ]
})
export class PruebaComponent implements OnInit 
{

  name: string = "Paco";

  constructor() { }

  ngOnInit(): void {
  }

}
