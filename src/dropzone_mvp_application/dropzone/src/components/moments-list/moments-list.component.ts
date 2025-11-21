import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-moments-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gray-800 p-6 rounded-xl shadow-lg w-full">
      <h2 class="text-xl font-bold mb-4 text-cyan-300">Your moments</h2>

      <ul class="space-y-2">
        <li class="flex items-center gap-2" *ngFor="let moment of moments">
          <span class="w-2 h-2 bg-cyan-400 rounded-full"></span>
          <span>{{ moment.time }} — {{ moment.label }}</span>
        </li>
      </ul>

      <button
        class="mt-4 px-4 py-2 bg-cyan-600 rounded-lg text-white hover:bg-cyan-500 transition">
        + New moment
      </button>
    </div>
  `,
})
export class MomentsList {
  moments = [
    { time: '00:15:42', label: 'Drop #1' },
    { time: '00:32:18', label: 'Breakdown' },
    { time: '01:04:58', label: 'Final drop' },
  ];
}
