import { Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightListComponent } from './flight-list/flight-list.component';

export const routes: Routes = [
  { path: 'search', component: FlightSearchComponent },
  { path: 'flights/all', component: FlightListComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' }
];
