import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule,],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() isVisible = false;
  @Input() title: string = 'Sidebar'; // Title for the sidebar
  @Output() close = new EventEmitter<void>();

  closeSidebar() {
    this.close.emit();
  }
}
