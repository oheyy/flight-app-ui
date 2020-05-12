import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  searchFlightForm;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.searchFlightForm = this.formBuilder.group({
      inputcontryFrom: '',
      inputCountryTo: '',
      inputDepart: '',
      inputReturn: ''
    });
  }

  ngOnInit(): void {}
  searchFlights(flightSearchData) {
    this.router.navigate(['/flights'], {
      queryParams: {
        countryFrom: flightSearchData.inputcontryFrom,
        countryTo: flightSearchData.inputCountryTo,
        departDate: flightSearchData.inputDepart
          .split('-')
          .reverse()
          .join('-'),
        returnDate: flightSearchData.inputReturn
          .split('-')
          .reverse()
          .join('-')
      }
    });
  }
}
