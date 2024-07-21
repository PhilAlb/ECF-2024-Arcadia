import { Routes } from '@angular/router';
import { HomePageComponent } from './components/views/home-page/home-page.component';
import { ServicesPageComponent } from './components/views/services-page/services-page.component';
import { HabitatsPageComponent } from './components/views/habitats-page/habitats-page.component';
import { ContactPageComponent } from './components/views/contact-page/contact-page.component';

export enum RouteLinks {
  Home = 'home',
  Services = 'services',
  Habitats = 'habitats',
  Contact = 'contact',
}

export const routes: Routes = [
  { path: RouteLinks.Home, component: HomePageComponent },
  { path: RouteLinks.Services, component: ServicesPageComponent },
  { path: RouteLinks.Habitats, component: HabitatsPageComponent },
  { path: RouteLinks.Contact, component: ContactPageComponent },
  // {} // admin
  // {} // employees
  // {} // veterinary
  { path: '', redirectTo: RouteLinks.Home, pathMatch: 'full' },
  { path: '**', redirectTo: RouteLinks.Home, pathMatch: 'full' },
];
