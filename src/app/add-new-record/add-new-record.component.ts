import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-new-record',
  standalone: true,
  imports: [],
  templateUrl: './add-new-record.component.html',
  styleUrl: './add-new-record.component.scss'
})
export class AddNewRecordComponent {
  @Input() isVisible = false;
  @Input() title: string = 'Add a New Record'; // Title for the sidebar
  @Output() close = new EventEmitter<void>();

  closeSidebar() {
    this.close.emit();
  }
}
