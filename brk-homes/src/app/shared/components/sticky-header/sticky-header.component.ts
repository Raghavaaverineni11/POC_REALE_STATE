import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-sticky-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sticky-header.component.html',
  styleUrl: './sticky-header.component.scss'
})
export class StickyHeaderComponent {
 visible = false;
  headerHeight = 0;

  ngAfterViewInit() {
    const header = document.querySelector('header.main-header');
    this.headerHeight = header ? header.clientHeight : 200;
  }

  @HostListener('window:scroll')
  onScroll() {
    this.visible = window.scrollY > this.headerHeight;
  }
}
