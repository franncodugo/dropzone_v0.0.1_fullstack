import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  videos = [
    {
      title: 'Boris Brejcha @ Tomorrowland',
      moments: 5,
      duration: '1.1 h',
      image: 'assets/images/boris.svg',
    },
    {
      title: 'Amelie Lens @ Awakenings',
      moments: 3,
      duration: '58 m',
      image: 'assets/images/amelie.svg',
    },
  ];

  @Output() selectVideo = new EventEmitter<any>();
}
