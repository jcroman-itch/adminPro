import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {


  porcentaje:number = 20;
  porcentaje2:number = 30

  constructor() { }

  ngOnInit() {
  }

}
