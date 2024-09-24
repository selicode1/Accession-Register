import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { StatCardComponent } from '../stat-card/stat-card.component';
import { AddNewRecordComponent } from '../add-new-record/add-new-record.component';
import { FilterReportComponent } from '../filter-report/filter-report.component';
import { EditRecordComponent } from '../edit-record/edit-record.component';

@Component({
  selector: 'app-reporting',
  standalone: true,
  imports: [SidebarComponent, StatCardComponent, AddNewRecordComponent, FilterReportComponent, EditRecordComponent],
  templateUrl: './reporting.component.html',
  styleUrl: './reporting.component.scss'
})
export class ReportingComponent {
  visibleSidebar: string | null = null;

  toggleSidebar(sidebarType: string) {
    this.visibleSidebar = this.visibleSidebar === sidebarType ? null : sidebarType;
  }

  hideSidebar() {
    this.visibleSidebar = null;
  }

}
