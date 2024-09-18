import { Component, AfterViewInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { DonutChartComponent } from '../donut-chart/donut-chart.component';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { StatCardComponent } from '../stat-card/stat-card.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [SidebarComponent, DonutChartComponent, LineChartComponent, StatCardComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {

}
