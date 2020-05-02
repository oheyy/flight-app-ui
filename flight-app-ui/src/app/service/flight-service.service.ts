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
}
