import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FlightService } from './service/flight-service.service';
import { FlightListResolver } from './service/flight-list-resolver.service';
import { FlightSearchResolver } from './service/flight-search-resolver.service';
import { routes } from './routes';
import { FlightThumbnailComponent } from './flight-thumbnail/flight-thumbnail.component';
import { GraphQLModule } from './graphql.module';
@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent,
    FlightListComponent,
    FlightThumbnailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    GraphQLModule
  ],
  providers: [FlightService, FlightListResolver, FlightSearchResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}
