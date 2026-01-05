import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
scrolled = false;

@HostListener('window:scroll')
onScroll() {
  this.scrolled = window.scrollY > 80;
}
}
