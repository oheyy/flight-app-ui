import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { FlightService } from './flight-service.service';
import { Injectable } from '@angular/core';
import { IFlight } from '../model/IFlight.model';

@Injectable()
export class FlightSearchResolver implements Resolve<any> {
  countryFrom: String;
  countryTo: String;
  dateFrom: String;
  dateTo: String;
  flight: IFlight;

  constructor(private flightService: FlightService) {}
  resolve(route: ActivatedRouteSnapshot) {
    return this.flightService.getFlight(route);
  }
}
