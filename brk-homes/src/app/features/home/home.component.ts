import { Component, OnInit } from '@angular/core';

interface HeroSlide {
  type: 'video' | 'image';
  src: string;
  poster?: string;
  title?: string;
  subtitle?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  heroSlides: HeroSlide[] = [
    {
      type: 'video',
      src: 'assets/home/hero/hero-video.mp4',
      poster: 'assets/home/hero/hero-poster.jpg',
      title: 'Modern Living in Northlake',
      subtitle: 'Luxury Apartments by BRK Homes'
    },
    {
      type: 'image',
      src: 'assets/home/hero/hero-image.jpg',
      title: 'Thoughtfully Designed Homes'
    }
  ];

  activeHeroIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.activeHeroIndex =
        (this.activeHeroIndex + 1) % this.heroSlides.length;
    }, 8000);
  }
}
