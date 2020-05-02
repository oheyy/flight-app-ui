import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FlightService } from './service/flight-service.service';
import { routes } from './routes';
@NgModule({
  declarations: [AppComponent, FlightSearchComponent, FlightListComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule {}
