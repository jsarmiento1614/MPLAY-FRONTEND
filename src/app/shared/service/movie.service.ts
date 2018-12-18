import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(public http: HttpClient) { 
    this.http=http;
  }

  getMovies(){
    return this.http.get("http://localhost:8090/v1/MoviesShows/Filter/All");
  }
}
