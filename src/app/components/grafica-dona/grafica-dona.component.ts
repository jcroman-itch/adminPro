import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {

   // Doughnut
   @Input() public ChartLabels:string[] = [];
   @Input() public ChartData:number[] = [];
   @Input() public ChartType:string = '';

  constructor() { }

  ngOnInit() {
  }

}
