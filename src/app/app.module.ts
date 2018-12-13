import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FilterComponent } from './components/filter/filter.component';
import { LoginComponent } from './components/login/login.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RegisterComponent } from './components/register/register.component';
import { CarouselMovieComponent } from './components/carousel-movie/carousel-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FilterComponent,
    LoginComponent,
    CarouselComponent,
    RegisterComponent,
    CarouselMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
