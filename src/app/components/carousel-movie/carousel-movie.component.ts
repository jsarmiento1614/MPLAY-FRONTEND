import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { MovieService } from '../../shared/service/movie.service';
import { Movie } from '../../shared/model/movie';
@Component({
  selector: 'app-carousel-movie',
  templateUrl: './carousel-movie.component.html',
  styleUrls: ['./carousel-movie.component.scss']
})
export class CarouselMovieComponent implements OnInit {
  movie: Array<Movie>; 
  createMode : boolean;
  SelectedMovie: Movie;
  constructor(private movieService: MovieService) {
    this.movieService = movieService;
   }

  ngOnInit() {
    this.movieService.getMovies()
    .subscribe((data : Array<Movie>) =>{
      this.movie = data.slice(0,20);
    },error => {
      console.log(`Error ${error}`);
    });
    $(document).ready(function() {
      $("#myCarousel").on("slide.bs.carousel", function(e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 3;
        var totalItems = $(".carousel-item").length;
    
        if (idx >= totalItems - (itemsPerSlide - 1)) {
          var it = itemsPerSlide - (totalItems - idx);
          for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction == "left") {
              $(".carousel-item")
                .eq(i)
                .appendTo(".carousel-inner");
            } else {
              $(".carousel-item")
                .eq(0)
                .appendTo($(this).find(".carousel-inner"));
            }
          }
        }
      });

      $(document).on("mouseover", "div.jscard", function () {
          let idCard = $(this).attr('id')
          $(`div#${idCard}-card-carouzel`).removeClass('d-none');
      });
      $(document).on("mouseout", "div.jscard", function () {
          let idCard = $(this).attr('id')
          $(`div#${idCard}-card-carouzel`).addClass('d-none');
      }); 
      
      $(document).on("mouseover", "div.new", function () {
        let idCard = $(this).attr('id')
        $(`div#${idCard}-card`).removeClass('d-none');
      });
      $(document).on("mouseout", "div.new", function () {
          let idCard = $(this).attr('id')
          $(`div#${idCard}-card`).addClass('d-none');
      });
    });

  }
}
