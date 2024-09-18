import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { StatCardComponent } from '../stat-card/stat-card.component';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [SidebarComponent, StatCardComponent],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {

}
