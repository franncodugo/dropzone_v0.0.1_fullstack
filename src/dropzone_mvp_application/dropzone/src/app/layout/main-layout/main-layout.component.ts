import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header.component';
import { SidebarComponent } from '../../shared/components/sidebar.component';
import { MomentsListComponent } from '../../shared/components/moments-list.component';
import { BeatPlayer } from '../../../components/beat-player/beat-player.component';

import type { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent, BeatPlayer, MomentsListComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
  selectedVideo: any | null = null;
  momentsList: Array<{ time: string; title: string }> = [
    { time: '00:15:42', title: 'Drop #1' },
    { time: '00:32:18', title: 'Breakdown (melodic)' },
    { time: '01:04:58', title: 'Final drop' }
  ];

  onSelectVideo(video: any) {
    this.selectedVideo = video;
    // In a real app we'd load moments for the selected video; keep defaults for now
  }

  onMarkMoment(time: string) {
    // Add a moment with a generated title
    this.momentsList = [{ time, title: `Moment ${this.momentsList.length + 1}` }, ...this.momentsList];
  }

  onAddMoment(payload: { time: string; title?: string }) {
    this.momentsList = [{ time: payload.time, title: payload.title || `Moment ${this.momentsList.length + 1}` }, ...this.momentsList];
  }
}
