import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { IFlight } from '../model/IFlight.model';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class FlightService {
  flight: IFlight[];
  constructor(private http: HttpClient, private apollo: Apollo) {}

  getAllFlights(): Observable<IFlight[]> {
    return this.http.get<IFlight[]>('api/flight/retrieve/all');
  }

  getFlight(route) {
    return this.apollo.query<any>({
      query: gql`
        query($countryFrom: String, $countryTo: String) {
          flight(countryFrom: $countryFrom, countryTo: $countryTo) {
            airline
            countryFrom
            countryTo
            price
            hours
            id
          }
        }
      `,
      variables: {
        countryFrom: route['countryFrom'],
        countryTo: route['countryTo']
      }
    });
  }
}
