import { Component, OnInit } from '@angular/core';
import { FlightService } from '../service/flight-service.service';
@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  constructor(private flightService: FlightService) {}

  ngOnInit(): void {}
  searchFlights() {}
}
