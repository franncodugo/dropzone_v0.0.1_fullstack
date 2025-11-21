import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [RouterLink, NgFor],
  template: `
    <h2 class="text-3xl font-semibold mb-4">Mis Videos</h2>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <a *ngFor="let video of videos" [routerLink]="['/video', video.id]"
         class="p-4 border border-gray-800 rounded-lg hover:bg-gray-900 transition">
        <h3 class="text-xl font-semibold">{{ video.title }}</h3>
        <p class="text-gray-400">{{ video.description }}</p>
      </a>
    </div>
  `
})
export class VideoList {
  videos = [
    { id: 1, title: 'Entrenamiento 1', description: 'Rutina de pecho' },
    { id: 2, title: 'Sesión de análisis', description: 'Feedback del coach' },
  ];
}
