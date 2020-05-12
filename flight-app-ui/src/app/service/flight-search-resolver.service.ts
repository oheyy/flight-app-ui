import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { FlightService } from './flight-service.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FlightSearchResolver implements Resolve<any> {
  countryFrom: String;
  countryTo: String;
  dateFrom: String;
  dateTo: String;
  constructor(private flightService: FlightService) {}
  resolve(route: ActivatedRouteSnapshot) {
    console.log('this is the ' + route.queryParams['countryFrom']);
    console.log('debug: ' + route.queryParams['countryTo']);
    console.log('debug2: ' + route.queryParams['departDate']);
    console.log('debug3: ' + route.queryParams['returnDate']);

    return this.flightService.getFlight(route);
  }
}
