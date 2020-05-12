import { Component, OnInit, Input } from '@angular/core';
import { IFlight } from '../model/IFlight.model';

@Component({
  selector: 'app-flight-thumbnail',
  templateUrl: './flight-thumbnail.component.html',
  styleUrls: ['./flight-thumbnail.component.css']
})
export class FlightThumbnailComponent implements OnInit {
  @Input() flight: IFlight;
  constructor() {}

  ngOnInit(): void {}
}
