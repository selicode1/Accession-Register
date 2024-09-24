import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent {
  @Input() isVisible = false;
  @Input() title: string = 'editUser';
  @Output() close = new EventEmitter<void>();

  closeSidebar() {
    this.close.emit();
  }
}
