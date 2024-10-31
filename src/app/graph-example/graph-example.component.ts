import {Component} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";


@Component({
  selector: 'app-graph-example',
  standalone: true,
  imports: [
    BaseChartDirective
  ],
  templateUrl: './graph-example.component.html',
  styleUrl: './graph-example.component.css'
})
export class GraphExampleComponent {

  chartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  chartOptions = {
    responsive: true,
  };
  chartLegend = true;
}

