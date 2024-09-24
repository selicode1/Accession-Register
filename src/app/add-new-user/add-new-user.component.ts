import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-new-user',
  standalone: true,
  imports: [],
  templateUrl: './add-new-user.component.html',
  styleUrl: './add-new-user.component.scss'
})
export class AddNewUserComponent {
  @Input() isVisible = false;
  @Input() title: string = 'Add a New Record';
  @Output() close = new EventEmitter<void>();

  closeSidebar() {
    this.close.emit();
  }

}
