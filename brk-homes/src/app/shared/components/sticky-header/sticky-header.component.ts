import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sticky-header',
  standalone: true,
  imports: [],
  templateUrl: './sticky-header.component.html',
  styleUrl: './sticky-header.component.scss'
})
export class StickyHeaderComponent {
visible = false;

  @HostListener('window:scroll')
  onScroll() {
    this.visible = window.scrollY > 300;
  }
}
