import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { StatCardComponent } from '../stat-card/stat-card.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { AddNewUserComponent } from '../add-new-user/add-new-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    SidebarComponent, 
    StatCardComponent, 
    UserProfileComponent, 
    AddNewUserComponent,
    EditUserComponent
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  visibleSidebar: string | null = null;

  toggleSidebar(sidebarType: string) {
    this.visibleSidebar = this.visibleSidebar === sidebarType ? null : sidebarType;
  }

  hideSidebar() {
    this.visibleSidebar = null;
  }

}
