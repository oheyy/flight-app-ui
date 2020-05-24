import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Route } from '@angular/router';
import { IFlight } from '../model/IFlight.model';
import { FlightService } from '../service/flight-service.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  flights: IFlight[];
  constructor(
    private actr: ActivatedRoute,
    private flightService: FlightService
  ) {
    if (this.actr.snapshot.data['flights']) {
      this.flights = this.actr.snapshot.data['flights'];
    }
  }

  ngOnInit(): void {
    console.log('debug: ' + this.actr.snapshot.queryParamMap);
    this.flightService.getFlight(this.actr.snapshot.queryParamMap['params']);
    // console.log(
    //   'debug1: ' + this.actr.snapshot.queryParamMap['params']['countryFrom']
    // );
    // console.log(
    //   'debug2: ' + this.actr.snapshot.queryParamMap['params']['countryTo']
    // );
  }
}
