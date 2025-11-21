import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-moments-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moments-list.component.html',
  styleUrls: ['./moments-list.component.css']
})
export class MomentsListComponent {
  @Input() moments: Array<{ time: string; title: string }> = [
    { time: '00:15:42', title: 'Drop #1' },
    { time: '00:32:18', title: 'Breakdown (melodic)' },
    { time: '01:04:58', title: 'Final drop' }
  ];

  @Output() addMoment = new EventEmitter<{ time: string; title?: string }>();

  onAddMoment() {
    // Emit a new moment using a placeholder title; MainLayout will handle insertion
    this.addMoment.emit({ time: '00:00:00', title: 'New moment' });
  }
}
