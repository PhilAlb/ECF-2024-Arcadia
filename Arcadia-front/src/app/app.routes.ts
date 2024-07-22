import { Routes } from '@angular/router';
import { HomePageComponent } from './components/views/home-page/home-page.component';
import { ServicesPageComponent } from './components/views/services-page/services-page.component';
import { HabitatsPageComponent } from './components/views/habitats-page/habitats-page.component';

export enum RouteLinks {
  Home = 'home',
  Services = 'services',
  Habitats = 'habitats',
}

export const routes: Routes = [
  { path: RouteLinks.Home, component: HomePageComponent },
  { path: RouteLinks.Services, component: ServicesPageComponent },
  { path: RouteLinks.Habitats, component: HabitatsPageComponent },
  // {} // admin
  // {} // employees
  // {} // veterinary
  { path: '', redirectTo: RouteLinks.Home, pathMatch: 'full' },
  { path: '**', redirectTo: RouteLinks.Home, pathMatch: 'full' },
];
