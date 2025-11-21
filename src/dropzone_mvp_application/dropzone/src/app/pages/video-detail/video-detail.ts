import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-detail',
  standalone: true,
  templateUrl: './video-detail.html',
  styleUrls: ['./video-detail.css'],
})
export class VideoDetail implements OnInit {
  id: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
