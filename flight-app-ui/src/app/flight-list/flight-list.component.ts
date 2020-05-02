import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFlight } from '../model/IFlight.model';
@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  flights: IFlight[];
  constructor(private actr: ActivatedRoute) {
    this.flights = this.actr.snapshot.data['flights'];
  }

  ngOnInit(): void {}
}
