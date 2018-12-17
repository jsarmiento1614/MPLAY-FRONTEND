import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-carousel-movie',
  templateUrl: './carousel-movie.component.html',
  styleUrls: ['./carousel-movie.component.scss']
})
export class CarouselMovieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
      if ($('div#idCard').on == true) $('.mp-card-body').removeClass("d-none")
       $('div#idCard').on('mouseover',function() {
            $('.mp-card-body').removeClass('d-none');
       }).fadeIn(); 
      $('div#idCard').on('mouseout',function() {
            $('.mp-card-body').addClass('d-none');
       }); 
    });

  }

}
