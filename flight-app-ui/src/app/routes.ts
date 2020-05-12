import { Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightListResolver } from './service/flight-list-resolver.service';
import { FlightSearchResolver } from './service/flight-search-resolver.service';

export const routes: Routes = [
  { path: 'search', component: FlightSearchComponent },
  {
    path: 'flights/all',
    component: FlightListComponent,
    resolve: { flights: FlightListResolver }
  },
  {
    path: 'flights',
    component: FlightListComponent,
    resolve: { flights: FlightSearchResolver }
  },
  { path: '', redirectTo: '/search', pathMatch: 'full' }
];
