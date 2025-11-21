import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="text-center py-20">
      <h1 class="text-5xl font-bold text-cyan-400 mb-6">Bienvenido a Dropzone</h1>
      <p class="text-gray-300 mb-8 text-lg">Subí, guarda y visualiza tus clips con marcas de tiempo inteligentes.</p>
      <a routerLink="/videos"
         class="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition-all">
         Ver mis videos
      </a>
    </section>
  `
})
export class Home {}
