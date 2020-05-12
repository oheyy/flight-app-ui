import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightThumbnailComponent } from './flight-thumbnail.component';

describe('FlightThumbnailComponent', () => {
  let component: FlightThumbnailComponent;
  let fixture: ComponentFixture<FlightThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
