import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { IFlight } from '../model/IFlight.model';

@Injectable()
export class FlightService {
  constructor(private http: HttpClient) {}

  getAllFlights(): Observable<IFlight[]> {
    return this.http.get<IFlight[]>('api/flight/retrieve/all');
  }

  getFlight(route) {
    let url = '/api/flight/retrieve?'.concat(
      'countryFrom=',
      route.queryParams['countryFrom'],
      '&countryTo=',
      route.queryParams['countryTo'],
      '&departDate=',
      route.queryParams['departDate'],
      '&returnDate=',
      route.queryParams['returnDate']
    );
    return this.http.get<IFlight[]>(url);
  }
}
