import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beat-player',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gray-800 p-6 rounded-xl shadow-lg w-full">
      <h2 class="text-xl font-bold mb-4 text-cyan-300">BeatPlayer</h2>

      <div class="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="opacity-60">
          <circle cx="12" cy="12" r="12" fill="#0f172a" />
          <path d="M10 8L16 12L10 16V8Z" fill="#9be7ef"/>
        </svg>
      </div>

      <div class="mt-4 flex justify-between items-center">
        <span class="text-sm opacity-70">{{ currentTime }}</span>
        <button
          (click)="onMark()"
          class="px-4 py-2 bg-cyan-600 rounded-lg text-white hover:bg-cyan-500 transition">
          Mark moment
        </button>
      </div>
    </div>
  `,
})
export class BeatPlayer {
  @Input() video: any | null = null;
  @Output() markMoment = new EventEmitter<string>();

  // simple placeholder current time; in a real player this would be dynamic
  currentTime = '00:15:42';

  onMark() {
    this.markMoment.emit(this.currentTime);
  }
}
