import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer/footer';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  template: `
    <div class="flex flex-col min-h-screen bg-gray-950 text-gray-100">
      <app-navbar></app-navbar>
      <main class="flex-1 container mx-auto p-4">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `
})
export class MainLayout {}
