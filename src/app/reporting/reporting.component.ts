import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { StatCardComponent } from '../stat-card/stat-card.component';

@Component({
  selector: 'app-reporting',
  standalone: true,
  imports: [SidebarComponent, StatCardComponent],
  templateUrl: './reporting.component.html',
  styleUrl: './reporting.component.scss'
})
export class ReportingComponent {

}
