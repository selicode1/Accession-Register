import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-record',
  standalone: true,
  imports: [],
  templateUrl: './edit-record.component.html',
  styleUrl: './edit-record.component.scss'
})
export class EditRecordComponent {
  @Input() isVisible = false;
  @Input() title: string = 'editUser';
  @Output() close = new EventEmitter<void>();

  closeSidebar() {
    this.close.emit();
  }
}
