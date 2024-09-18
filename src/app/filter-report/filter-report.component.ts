import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-report',
  standalone: true,
  imports: [],
  templateUrl: './filter-report.component.html',
  styleUrl: './filter-report.component.scss'
})
export class FilterReportComponent {
  @Input() isVisible = false;
  @Input() title: string = 'Filter Report'; // Title for the sidebar
  @Output() close = new EventEmitter<void>();

  closeSidebar() {
    this.close.emit();
  }

}
