import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-moments-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moments-list.html',
})
export class MomentsList {
  @Input() moments: { time: string; title: string }[] = [];
}
