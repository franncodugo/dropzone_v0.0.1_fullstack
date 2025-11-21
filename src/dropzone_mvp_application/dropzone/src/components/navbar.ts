import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="bg-gray-900 border-b border-gray-800 py-4">
      <div class="container mx-auto flex items-center justify-between">
        <a routerLink="/" class="text-2xl font-bold text-cyan-400">Dropzone</a>
        <div class="flex gap-6">
          <a routerLink="/" class="hover:text-cyan-400">Home</a>
          <a routerLink="/videos" class="hover:text-cyan-400">Videos</a>
        </div>
      </div>
    </nav>
  `
})
export class Navbar {}
