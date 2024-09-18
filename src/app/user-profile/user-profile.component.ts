import { Component } from '@angular/core';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { SingleDonutChartComponent } from '../single-donut-chart/single-donut-chart.component';
import { DonutChartComponent } from "../donut-chart/donut-chart.component";
import { SingleDonutChart2Component } from "../single-donut-chart2/single-donut-chart2.component";

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [BarChartComponent, SingleDonutChartComponent, SingleDonutChartComponent, SingleDonutChart2Component],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

}
