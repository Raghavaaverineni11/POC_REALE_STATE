import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/home.component')
            .then(m => m.HomeComponent)
      },
      {
        path: 'amenities',
        loadComponent: () =>
          import('./features/amenities/amenities.component')
            .then(m => m.AmenitiesComponent)
      },
      {
        path: 'floor-plans',
        loadComponent: () =>
          import('./features/floor-plans/floor-plans.component')
            .then(m => m.FloorPlansComponent)
      },
      {
        path: 'gallery',
        loadComponent: () =>
          import('./features/gallery/gallery.component')
            .then(m => m.GalleryComponent)
      },
      {
        path: 'virtual-tours',
        loadComponent: () =>
          import('./features/virtual-tours/virtual-tours.component')
            .then(m => m.VirtualToursComponent)
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./features/contact/contact.component')
            .then(m => m.ContactComponent)
      },
      {
        path: 'residents',
        loadComponent: () =>
          import('./features/residents/residents.component')
            .then(m => m.ResidentsComponent)
      }
    ]
  }
];
